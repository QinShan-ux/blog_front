import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sentence } from 'src/app/model/sentence';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  ip = "http://localhost:5172";
  sentenct: Sentence[] = []
  get_url<T>(url: string): Observable<T> {
    return this.http.get<T>(url)
  }
  post_url(url: string, body: any): Observable<any> {
    console.log(body)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(url, body, { headers })
  }
}
