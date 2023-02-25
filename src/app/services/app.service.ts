import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class FormSubmittedService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<{}> {
    return this.http.get(`${baseUrl}/fetchAll`);
  }

  public create(data: Object): Observable<{}> {
    return this.http.post(`${baseUrl}/feedback`, data);
  }

}
