import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { MailComposeComponent } from './mail-compose/mail-compose.component';
import { MailSettingComponent } from './mail-setting/mail-setting.component';
import { MailComponent } from './mail/mail.component';
import { ReadMailComponent } from './read-mail/read-mail.component';

const routes: Routes = [
  {
    path: 'mail',
    children: [
      { path: 'chat', title: 'Adminor - chat', component: ChatComponent },
      { path: 'mail', title: 'Adminor - mail', component: MailComponent },
      {
        path: 'mail-compose',
        title: 'Adminor - mail-compose',
        component: MailComposeComponent,
      },
      {
        path: 'mail-setting',
        title: 'Adminor - mail-setting',
        component: MailSettingComponent,
      },
      {
        path: 'read-mail',
        title: 'Adminor - read-mail',
        component: ReadMailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailRoutingModule { }
