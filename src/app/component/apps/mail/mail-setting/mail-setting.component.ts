import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mail-setting',
  templateUrl: './mail-setting.component.html',
  styleUrls: ['./mail-setting.component.scss'],
})
export class MailSettingComponent {
  
  constructor(private modalService: NgbModal) {}

  open(content: any) {
    this.modalService.open(content, {
      backdrop: 'static',
      windowClass: 'modalCusSty',
    });
  }
}
