import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailRoutingModule } from './mail-routing.module';
import { MailComposeComponent } from './mail-compose/mail-compose.component';
import { ReadMailComponent } from './read-mail/read-mail.component';
import { MailSettingComponent } from './mail-setting/mail-setting.component';
import { ChatComponent } from './chat/chat.component';
import { MailComponent } from './mail/mail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    MailComposeComponent,
    ReadMailComponent,
    MailSettingComponent,
    ChatComponent,
    MailComponent,
  ],
  imports: [
    CommonModule,
    MailRoutingModule,
    SharedModule,
      NgbModule,
      FormsModule,
    ReactiveFormsModule,
      NgScrollbarModule,
    NgSelectModule
  ],
})
export class MailModule {}
