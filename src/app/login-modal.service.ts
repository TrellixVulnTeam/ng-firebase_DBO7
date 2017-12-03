import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth, FirebaseAuthStateObservable } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class LoginModalService {

  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
    .auth
    .createUserWithEmailAndPassword(email, password)
    .then(value => {
      console.log('Success: ', value);
    })
    .catch(err => {
      console.log('Something went wrong: ', err.message);
    });
  }

  login(email: string, password: string) {
    this.firebaseAuth
    .auth
    .signInWithEmailAndPassword(email, password)
    .then(value => {
      console.log('Login succeed');
    })
    .catch(err => {
      console.log('Login failed', err.message);
    });
  }

  logout() {
    this.firebaseAuth
    .auth
    .signOut()
    .then(value => {
      console.log('Logout succeed');
    })
    .catch(err => {
      console.log('Logout unsucceed');
    });
  }

}
