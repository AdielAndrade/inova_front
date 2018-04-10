import { Component, OnInit } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { Pobjects } from '../p-object.model';

import{ NgForm } from '@angular/forms';

@Component({
  selector: 'app-nv-objeto',
  templateUrl: './nv-objeto.component.html',
  styleUrls: ['./nv-objeto.component.css']
})
export class NvObjetoComponent implements OnInit {

  title: string;
  closeBtnName: string;
  mensagem: string;
  objetos: Pobjects;

  constructor(public bsModalRef: BsModalRef) {

  }

  criarObjeto(objectForm){
    this.objetos.name = objectForm.value.nome;
    this.objetos.description= objectForm.value.descricao;
    this.objetos.amount_avaliable= objectForm.value.quantidade;
    this.objetos.photo= objectForm.value.foto;
  }



  ngOnInit() {
  }

}
