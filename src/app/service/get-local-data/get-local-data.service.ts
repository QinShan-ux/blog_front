import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sentence } from 'src/app/model/sentence';
import { Plan } from "../../model/plan"
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetLocalDataService {

  constructor(private http: HttpClient) { }
  sentenct: Sentence[] = []
  get_local_data<T>(url: string): Observable<T> {
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
