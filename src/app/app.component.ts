import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { environment } from './../environments/environment';

// Firebase
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(db: AngularFireDatabase, private router: Router) {

  }

}
