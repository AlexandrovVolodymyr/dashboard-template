import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ChatViewComponent } from './containers/chat-view/chat-view.component';

const routes: Routes = [
  {
    path: '', component: ChatViewComponent
  }
];

@NgModule({
  declarations: [ChatViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ChatModule { }
