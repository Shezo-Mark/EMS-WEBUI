import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form-layouts',
  templateUrl: './form-layouts.component.html',
  styleUrls: ['./form-layouts.component.scss'],
})
export class FormLayoutsComponent {
  
  constructor(private modalService: NgbModal) {}

  open(content: any) {
    this.modalService.open(content);
  }
}
