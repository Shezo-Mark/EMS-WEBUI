import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mail-compose',
  templateUrl: './mail-compose.component.html',
  styleUrls: ['./mail-compose.component.scss'],
})
export class MailComposeComponent {
  constructor(private modalService: NgbModal) {}

  open(content: any) {
    this.modalService.open(content, {
      backdrop: 'static',
      windowClass: 'modalCusSty',
    });
  }
}
