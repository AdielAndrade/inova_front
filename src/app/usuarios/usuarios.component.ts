import { Component, OnInit } from '@angular/core';

import { Usuario } from './usuario.model';
import { UsuarioService } from './usuario.service';
import { NvUsuarioComponent } from './nv-usuario/nv-usuario.component';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] =[];


  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService, private usuarioService: UsuarioService) {}

  criarUsuario() {
    const initialState = {
      title: 'Criar Usuario',
      usuario: new Usuario(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null),
      mensagem: 'Usuario criado com sucesso',
      modificar: true
    };
    this.bsModalRef = this.modalService.show(NvUsuarioComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  opcoesUsuario(usuario: Usuario) {
    const initialState = {
      title: 'Opçoes de Usuario',
      usuario: usuario,
      mensagem: 'Usuario criado com sucesso',
      modificar: true
    };
    this.bsModalRef = this.modalService.show(NvUsuarioComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  ngOnInit() {
    this.usuarioService.getUsuarios()
    .subscribe(usuarios => this.usuarios = usuarios);

  }



}
