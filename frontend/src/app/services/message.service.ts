import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const IP = environment.BACKEND_IP || '127.0.0.1';
const PORT = environment.BACKEND_PORT || '8888';
const API_ENDPOINT = '/api';
const BASE_URL = 'http://' + IP + ':' + PORT + API_ENDPOINT;

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  addMessage(message: any): Observable<any>{
    return this.http.post( BASE_URL + '/add-message/', message);
  }

  getAllMessage(): Observable<any>{
    return this.http.post(BASE_URL + '/get-all-message/', null);
  }

  getDataMessage(): Observable<any>{
    return this.http.post(BASE_URL + '/get-message-data/', null);
  }
}
