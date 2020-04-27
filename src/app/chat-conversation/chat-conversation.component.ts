import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { UserService } from '../services/user.service';
import * as io from 'socket.io-client';


@Component({
  selector: 'app-chat-conversation',
  templateUrl: './chat-conversation.component.html',
  styleUrls: ['./chat-conversation.component.sass']
})
export class ChatConversationComponent implements OnInit {

  private totalUsers = { total : 0};
  private message: string;
  private nicknameid: string;
  private chats: string[] = [];

  private messageData = { nickname: '', message:'' };
  private userInfo = { nickname : ''}
  socket = io('http://localhost:3500');

  constructor(
  private userService: UserService,
  private chatService : ChatService) {
  }
  
  ngOnInit() {
    this.nicknameid = this.makeid();
    this.chatService.userInfo.nickname = this.chatService.userInfo.nickname ? this.chatService.userInfo.nickname : localStorage.getItem("user") ? localStorage.getItem("user") :`user${this.nicknameid}`;
    this.chatService.messageData.nickname = this.chatService.userInfo.nickname;

    this.messageData.nickname = this.chatService.messageData.nickname;
    this.userInfo.nickname = this.chatService.userInfo.nickname;

    this.socket.on('new-message', (message) => {
      this.chats.push(message);
    });
    this.saveUser();
    this.getTotalUsers();
    this.getChats();
  }

  ngOnDestroy(){
    this.userService.removeUser(localStorage.getItem("user")).subscribe((result) => {
      console.log(result);
      localStorage.removeItem("user");
    }, (err) => {
      console.log(err);
    });
  }
  makeid() {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 5; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
  getTotalUsers(){
    this.userService.getUsersCount().then((result : any) => {
      console.log(result);
      this.totalUsers = result;
      console.log(this.totalUsers);
    }, (err) => {
      console.log(err);
    });
  }
  saveUser(){
    if(!localStorage.getItem("user")){
      this.userService.saveUser(this.userInfo).subscribe((result) => {
        console.log(result);
        localStorage.setItem("user", this.userInfo.nickname);
      }, (err) => {
        console.log(err);
      });
    }
  }

  getChats() {
    this.chatService.getChats().then((res: Array<string>) => {
      this.chats = res;
    }, (err) => {
      console.log(err);
    });
  }

  sendMessage() {
    this.messageData.message = this.message;
    this.chatService.saveChat(this.messageData).subscribe((result) => {
      this.socket.emit('new-message', result);
      this.message = '';
    }, (err) => {
      console.log(err);
    });
  }
}
