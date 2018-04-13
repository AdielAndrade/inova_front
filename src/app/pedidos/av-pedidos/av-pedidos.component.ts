import { Component, OnInit } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { AvaliacoComponent } from './avaliaco/avaliaco.component';

@Component({
  selector: 'app-av-pedidos',
  templateUrl: './av-pedidos.component.html',
  styleUrls: ['./av-pedidos.component.css']
})
export class AvPedidosComponent implements OnInit {

    bsModalRef: BsModalRef;


  constructor(private modalService: BsModalService) { }

  avaliar() {
    const initialState = {
      title: 'Avaliar Pedido',
      mensagem: 'Objeto adicionado com sucesso',
    };
    this.bsModalRef = this.modalService.show(AvaliacoComponent , {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
}
  ngOnInit() {
  }


}
