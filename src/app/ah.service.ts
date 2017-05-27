import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import * as io from 'socket.io-client';

@Injectable()
export class ArhkamHorrorService {
  private url = document.location.protocol + '//' + document.location.host;
  private api = `${this.url}/api`;
  private socket;

  constructor(private _http: Http) {
    this.socket = io(this.url);
  }
  get(type, parameters?) {
    const extra = parameters || '';
    let observable = new Observable(observer => {
      this._http.get(`${this.api}/${type}${extra}`).map(res => res.json()).subscribe((data) => { observer.next(data) });
    });
    return observable;
  }
  getSocket(type) {
    let observable = new Observable(observer => {
      this.socket.on(type, (data) => { observer.next(data) });
      return () => { this.socket.disconnect(); };
    });
    return observable;
  }
  newHost(host){ this.socket.emit('new-host', host) }
  play(id, deck){ this.socket.emit('join-host', { id: id, deck: deck }) }
  updateHost(host) { this.socket.emit('update-host', host) }
}
