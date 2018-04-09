import { Component, OnInit } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { Usuario } from '../usuario.model';

import{ NgForm } from '@angular/forms';

@Component({
  selector: 'app-nv-usuario',
  templateUrl: './nv-usuario.component.html',
  styleUrls: ['./nv-usuario.component.css']
})
export class NvUsuarioComponent implements OnInit {

  title: string;
  closeBtnName: string;
  mensagem: string;
  usuario: Usuario;


  constructor(public bsModalRef: BsModalRef) {}


  ngOnInit() {
  }



}
