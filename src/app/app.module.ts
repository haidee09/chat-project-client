import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatConversationComponent } from './chat-conversation/chat-conversation.component';
import { ChatNicknameComponent } from './chat-nickname/chat-nickname.component';
import { ChatLogoutComponent } from './chat-logout/chat-logout.component';
import { ChatService } from './services/chat.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: 'chats', pathMatch: 'full' },
  { path: 'chats', component: ChatConversationComponent },
  { path: 'nickname', component: ChatNicknameComponent},
  { path: 'logout', component: ChatLogoutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ChatConversationComponent,
    ChatNicknameComponent,
    ChatLogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
    //AppRoutingModule
  ],
  providers: [ChatService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
