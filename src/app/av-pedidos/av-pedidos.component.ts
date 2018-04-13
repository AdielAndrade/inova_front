import { Component, OnInit } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { AvaliacoComponent } from './avaliaco/avaliaco.component';

import {AvPedidos} from './av-pedidos.modal';
import {AvPedidosService} from './av-pedidos.service';

@Component({
  selector: 'app-av-pedidos',
  templateUrl: './av-pedidos.component.html',
  styleUrls: ['./av-pedidos.component.css']
})
export class AvPedidosComponent implements OnInit {

    pedidos: AvPedidos[];

    bsModalRef: BsModalRef;


  constructor(private modalService: BsModalService, private avPedidosService: AvPedidosService) { }

  avaliar(pedido) {
    const initialState = {
      title: 'Avaliar Pedido',
      mensagem: 'Objeto adicionado com sucesso',
      pedido: pedido
    };
    this.bsModalRef = this.modalService.show(AvaliacoComponent , {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
}
  ngOnInit() {
    this.avPedidosService.getPedidos()
    .subscribe(pedidos => this.pedidos = pedidos);
  }


}
