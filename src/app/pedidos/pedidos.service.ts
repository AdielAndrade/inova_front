import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { API } from '../app.api'
import { Pobjects } from './p-object.model';

import {ErrorHandler} from '../app.error-handler'



@Injectable()
export class PedidosService {

  constructor(private http: Http){}

  // restaurants(search?: string): Observable<Restaurant[]> {
  //   return this.http.get(`${MEAT_API}/restaurants`, {params: {q: search}})
  //     .map(response => response.json())
  //     .catch(ErrorHandler.handleError)
  // }


  getObjetos(): Observable<Pobjects[]>{
    return this.http.get(`${API}/objetos`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)

  }

}
