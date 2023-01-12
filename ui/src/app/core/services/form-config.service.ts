import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { RegistrationField } from 'src/app/core/interfaces';

@Injectable({
  providedIn: 'root',
})
export class FormConfigService {
  constructor(private readonly http: HttpClient) { }

  public getRegistrationFormConfig(): Observable<RegistrationField[]> {
    return this.http.get<RegistrationField[]>(`${environment.api}/registration-form-config`)
  }
}
