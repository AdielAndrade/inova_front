import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MissoesComponent } from './missoes/missoes.component';
import { QuizComponent } from './quiz/quiz.component';
import { RespostasComponent } from './missoes/respostas/respostas.component';
import { QRespostasComponent } from './quiz/q-respostas/q-respostas.component';


const APP_ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'missoes', component: MissoesComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'q-resposta', component: QRespostasComponent },
  { path: 'm-resposta', component: RespostasComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
