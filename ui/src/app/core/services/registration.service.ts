import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistrationField } from 'src/app/core/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {

  constructor(private readonly http: HttpClient) { }

  public createNewUser(body: any): Observable<RegistrationField[]> {
    return this.http.post<RegistrationField[]>(`${environment.api}/register`, body);
  }
}
