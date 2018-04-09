import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routing';

import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { PainelComponent } from './painel/painel.component';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NvUsuarioComponent } from './usuarios/nv-usuario/nv-usuario.component';
import { MissoesComponent } from './missoes/missoes.component';
import { NvMissaoComponent } from './missoes/nv-missao/nv-missao.component';
import { QuizComponent } from './quiz/quiz.component';
import { NvQuizComponent } from './quiz/nv-quiz/nv-quiz.component';
import { RespostasComponent } from './missoes/respostas/respostas.component';
import { QRespostasComponent } from './quiz/q-respostas/q-respostas.component';
import { QAvaliacaoComponent } from './quiz/q-respostas/q-avaliacao/q-avaliacao.component';
import { MAvaliacaoComponent } from './missoes/respostas/m-avaliacao/m-avaliacao.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { NvObjetoComponent } from './pedidos/nv-objeto/nv-objeto.component';
import { AvPedidosComponent } from './pedidos/av-pedidos/av-pedidos.component';


@NgModule({
  declarations: [
    AppComponent,
    PainelComponent,
    LoginComponent,
    UsuariosComponent,
    NvUsuarioComponent,
    MissoesComponent,
    NvMissaoComponent,
    QuizComponent,
    NvQuizComponent,
    RespostasComponent,
    QRespostasComponent,
    QAvaliacaoComponent,
    MAvaliacaoComponent,
    PedidosComponent,
    NvObjetoComponent,
    AvPedidosComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserModule,
    FormsModule,
    routing,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot()
  ],
  entryComponents: [
   NvUsuarioComponent
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
