import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { UserService } from '../services/user.service';
import { ChatConversationComponent } from '../chat-conversation/chat-conversation.component';

@Component({
  selector: 'app-chat-nickname',
  templateUrl: './chat-nickname.component.html',
  styleUrls: ['./chat-nickname.component.sass']
})
export class ChatNicknameComponent implements OnInit {

  newNickname = '';
  userUpdated = false;
  
  constructor(private userService: UserService, private chatService : ChatService) {
  }

  ngOnInit() {
  }

  updateNickname(){
    this.chatService.userInfo.nickname = this.newNickname;
    this.chatService.messageData.nickname = this.newNickname;
    this.newNickname = '';
    this.userUpdated = true;
  }
}
