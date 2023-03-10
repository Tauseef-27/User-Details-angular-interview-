import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient,
    private HttpClient :HttpClient) { }


  getDetails(): Observable<any>{
    return this.http.get<any>("https://jsonplaceholder.typicode.com/posts/");
  }

  getDetailById(Id:string): Observable<any>{
    return this.HttpClient.get<any>(" https://jsonplaceholder.typicode.com/users/"+Id);
  }


}
