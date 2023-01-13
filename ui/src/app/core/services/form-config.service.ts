import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { from, map, Observable, switchMap } from 'rxjs';
import { IRegistrationField } from '../interfaces';
import { plainToInstance } from 'class-transformer';
import { RegistrationField } from '../models';
import { validateOrReject } from 'class-validator';

@Injectable({
  providedIn: 'root',
})
export class FormConfigService {
  constructor(private readonly http: HttpClient) { }

  public getRegistrationFormConfig(): Observable<RegistrationField[]> {
    return this.http.get<IRegistrationField[]>(`${environment.api}/registration-form-config`).pipe(
      // TODO: should be extracted to custom pipe or reusable service
      map(response => plainToInstance(RegistrationField, response)),
      switchMap(response => {
        return from(
          Promise.all(response.map(r => validateOrReject(r)))
            .then(() => response)
            .catch(() => {
              throw new Error('Bad configuration');
            }),
        );
      }),
    );
  }
}
