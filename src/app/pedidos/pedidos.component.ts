import { Component, OnInit } from '@angular/core';

import { Pobjects } from './p-object.model';
import {PedidosService} from './pedidos.service';
import { NvObjetoComponent } from './nv-objeto/nv-objeto.component';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  bsModalRef: BsModalRef;
  objects: Pobjects[] = [];

  constructor(private modalService: BsModalService, private pedidosService: PedidosService) { }

  criarObjeto() {
    const initialState = {
      title: 'Criar Objeto',
      objetos: new Pobjects(null,null,null,null,null),
      mensagem: 'Objeto adicionado com sucesso',
      modificar: true
    };
    this.bsModalRef = this.modalService.show(NvObjetoComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  opcoes(objetos: Pobjects) {
    const initialState = {
      title: 'Criar Objeto',
      objetos: objetos,
      mensagem: 'Objeto adicionado com sucesso',
      modificar: true
    };
    this.bsModalRef = this.modalService.show(NvObjetoComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  ngOnInit() {
    this.pedidosService.getUsuarios()
    .subscribe(objects => this.objects = objects);

  }


}
