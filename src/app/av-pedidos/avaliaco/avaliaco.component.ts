import { Component, OnInit } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import{AvPedidos} from '../av-pedidos.modal';

@Component({
  selector: 'app-avaliaco',
  templateUrl: './avaliaco.component.html',
  styleUrls: ['./avaliaco.component.css']
})
export class AvaliacoComponent implements OnInit {

  title: string;
  closeBtnName: string;
  mensagem: string;
  pedido: AvPedidos


  constructor(public bsModalRef: BsModalRef) {  }


  

  ngOnInit() {
  }

}
