import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  url = 'https://monteapi2.test/api/v1';
  constructor(private http: HttpClient) { }
  getAllNews(): Observable<any> {
    return this.http.get(`${this.url}/noticias`).pipe(
    );
  }
  getOneNew(id): Observable<any> {
    return this.http.get(`${this.url}/noticias/${id}`).pipe(
    );
  }
}
