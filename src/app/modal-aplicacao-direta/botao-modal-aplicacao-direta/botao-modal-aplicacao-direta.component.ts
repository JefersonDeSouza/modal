import { Component, OnInit } from '@angular/core';
import { ModalAplicacaoDiretaComponent } from '../modal-aplicacao-direta.component';
import { NgbModalOptions, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-botao-modal-aplicacao-direta',
  templateUrl: './botao-modal-aplicacao-direta.component.html',
  styleUrls: ['./botao-modal-aplicacao-direta.component.sass']
})
export class BotaoModalAplicacaoDiretaComponent implements OnInit {
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open() {
    let modalOption: NgbModalOptions = {
      ariaLabelledBy: 'modal-basic-title',
      backdrop: false
    };

    const modalRef = this.modalService.open(ModalAplicacaoDiretaComponent, modalOption);
    modalRef.componentInstance.name = 'Jeferson';
  }
}
