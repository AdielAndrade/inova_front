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
  modificar: boolean;
  usuarioS: Usuario;

  constructor(public bsModalRef: BsModalRef) {}

  criarUsuario(usuarioForm){
    this.usuarioS = new Usuario(null, usuarioForm.value.nome, usuarioForm.value.email, usuarioForm.value.senha,
      usuarioForm.value.dataAniversario, usuarioForm.value.genero, null ,usuarioForm.value.telefone, usuarioForm.value.rua, usuarioForm.value.complemento,
      usuarioForm.value.numero, usuarioForm.value.bairro ,usuarioForm.value.cidade, usuarioForm.value.estado, usuarioForm.value.cep);
      console.log(this.usuarioS);
      this.bsModalRef.hide();

  }
  modiciarUsuario(usuario){
      console.log(this.usuario);

      this.bsModalRef.hide();
  }

  deletarUsuario(usuario){
      console.log(this.usuario);

      this.bsModalRef.hide();
  }


  ngOnInit() {


  }



}
