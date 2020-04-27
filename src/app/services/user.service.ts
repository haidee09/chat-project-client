import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import  { map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private service_url = 'http://localhost:3500/api';

  constructor(private http: HttpClient) { }

  saveUser(user: {}){
    return this.http.post(`${this.service_url}/user`, user) 
    .pipe(map((res) => res)) 
    .pipe(catchError((error) => Observable.throw(error || 'Server error')));
  }

  getUsersCount(){
    return new Promise((resolve, reject) => {
      this.http.get(`${this.service_url}/getTotalUsers`)
        .pipe(map(res => res))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  removeUser(user : string){
    return this.http.delete(`${this.service_url}/user/${user}`) 
    .pipe(map((res) => res)) 
    .pipe(catchError((error) => Observable.throw(error || 'Server error')));
  }
}
