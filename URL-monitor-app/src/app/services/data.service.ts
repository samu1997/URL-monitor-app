import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  loadUserData(): Observable<any> {
    var data = '';
    return this.http.post<any>("/login", data)
      .pipe(
        map(response => {
          return response;
        })
      );
  }
}
