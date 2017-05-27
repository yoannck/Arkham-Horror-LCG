import { Component, Injector } from '@angular/core';
import { Router, NavigationStart, RoutesRecognized, NavigationEnd } from '@angular/router';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _http: Http, private _injector:Injector, private _router: Router) {
    var state = null;
    _router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        // document.getElementById('pBar').style.display = "block";
      }
      // if(event instanceof RoutesRecognized) {}
      // if(event instanceof NavigationEnd) {}
    });
  }
}
