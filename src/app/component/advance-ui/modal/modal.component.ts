import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
declare var require: any;
const Swal = require('sweetalert2');
 

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  constructor(private modalService: NgbModal) {}
  BasicModalOpen(basicmodal: any) {
    this.modalService.open(basicmodal);
  }
  SmallOpen(smallmodal: any) {
    this.modalService.open(smallmodal, { size: 'sm' });
  }
  LargeOpen(largemodal: any) {
    this.modalService.open(largemodal, { size: 'lg' });
  }
  GridOpen(Grid: any) {
    this.modalService.open(Grid);
  }
  CongratulationsOpen(congratulations: any) {
    this.modalService.open(congratulations, { centered: true });
  }
  ErrorMessagesOpen(errormessages: any) {
    this.modalService.open(errormessages, { centered: true });
  }
  scrollingModalOpen(scrollingmodal: any) {
    this.modalService.open(scrollingmodal);
  }
  openScrollableContent2(ScroleContent: any) {
    this.modalService.open(ScroleContent, { scrollable: true });
  }
  openScrollableContent(content:any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true }).result.then((result) => {
    }, (reason) => {});
  }

  
  openSlideBottom(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__backInUp',
    });
  }
  openRotateLeft(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__slideInLeft',
    });
  }
  openNewspaper(modal: any) {
    this.modalService.open(modal, {
      centered: true,
      windowClass: 'animate__animated animate__rotateIn',
    });
  }
}
