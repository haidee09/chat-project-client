import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import  { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ChatService {

  private service_url = 'http://localhost:3500/api';

  messageData = { nickname: '', message:'' };
  userInfo = { nickname : ''}

  constructor(private http: HttpClient) { 
  }
 
  getChats() {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.service_url}/chat`)
        .pipe(map(res => res))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  saveChat(chat : {}){
    return this.http.post(`${this.service_url}/chat`, chat)
    .pipe(map((res) => res)) 
    .pipe(catchError((error) => Observable.throw(error || 'Server error')));
  } 
}
