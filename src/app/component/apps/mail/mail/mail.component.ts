import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss'],
})
export class MailComponent {
  
  constructor(private modalService: NgbModal) { }
  
  open(content: any) {
    this.modalService.open(content, {
      backdrop: 'static',
      windowClass: 'modalCusSty',
    });
  }
}
