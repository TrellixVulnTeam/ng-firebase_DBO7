import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginModalService } from '../login-modal.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  registerForm: FormGroup;
  loginForm: FormGroup;
  user = firebase.auth().currentUser;

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder, public authService: LoginModalService, private router: Router) {

    this.loginForm = fb.group({
      'login': [null, Validators.compose([Validators.required, Validators.pattern('[^ @]*@[^ @]*')])],
      'password': [null, Validators.required]
    });

    this.registerForm = fb.group({
      'login': [null, Validators.compose([Validators.required, Validators.pattern('[^ @]*@[^ @]*')])],
      'password': [null, Validators.required]
    });

  }

  getUserCredentials() {
    console.log(this.user.getIdToken());
  }

  onLoginSubmit( loginForm ) {
    if ( loginForm.valid ) {
      console.log(loginForm.value);
      this.authService.login(this.loginForm.value.login, this.loginForm.value.password);
    }
  }

  onRegisterSubmit( registerForm ) {
    if (registerForm.valid) {
      console.log(registerForm.value);
      this.authService.signup(this.registerForm.value.login, this.registerForm.value.password);
    }
  }

  ngOnInit() {
  }

}
