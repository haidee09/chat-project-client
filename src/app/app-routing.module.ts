import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatConversationComponent } from './chat-conversation/chat-conversation.component';
import { ChatNicknameComponent } from './chat-nickname/chat-nickname.component';
import { ChatLogoutComponent } from './chat-logout/chat-logout.component';

const routes: Routes = [
  { path: '', redirectTo: 'chats', pathMatch: 'full' },
  { path: 'chats', component: ChatConversationComponent },
  { path: 'nickname', component: ChatNicknameComponent},
  { path: 'logout', component: ChatLogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
