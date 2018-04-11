import { Component, OnInit } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-avaliaco',
  templateUrl: './avaliaco.component.html',
  styleUrls: ['./avaliaco.component.css']
})
export class AvaliacoComponent implements OnInit {

  title: string;
  closeBtnName: string;
  mensagem: string;
  
  modificar: boolean;

  constructor(public bsModalRef: BsModalRef) {

  }

  ngOnInit() {
  }

}
