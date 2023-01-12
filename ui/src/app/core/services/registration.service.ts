import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRegistrationField, IRegistrationRequest } from '../interfaces';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {

  constructor(private readonly http: HttpClient) { }

  public createNewUser(body: IRegistrationRequest): Observable<IRegistrationField[]> {
    return this.http.post<IRegistrationField[]>(`${environment.api}/register`, body);
  }
}
