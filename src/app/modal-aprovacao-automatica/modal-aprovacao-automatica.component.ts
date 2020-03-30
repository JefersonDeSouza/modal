import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from '../modal-content/modal-content.component';

@Component({
  selector: 'app-modal-aprovacao-automatica',
  templateUrl: './modal-aprovacao-automatica.component.html',
  styleUrls: ['./modal-aprovacao-automatica.component.sass']
})
export class ModalAprovacaoAutomaticaComponent implements OnInit {
  closeResult = '';

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open() {
    let modalOption: NgbModalOptions = {
      ariaLabelledBy: 'modal-basic-title',
      backdrop: false
    };

    const modalRef = this.modalService.open(ModalContentComponent, modalOption);
    modalRef.componentInstance.name = 'Jeferson';
    // const modalRef = this.modalService.open(ModalContentComponent, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;

    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
