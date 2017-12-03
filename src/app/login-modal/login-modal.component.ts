import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginModalService } from '../login-modal.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  registerForm: FormGroup;
  loginForm: FormGroup;

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder, public authService: LoginModalService) {

    this.loginForm = fb.group({
      'login': [null, Validators.compose([Validators.required, Validators.pattern('[^ @]*@[^ @]*')])],
      'password': [null, Validators.required]
    });

    this.registerForm = fb.group({
      'login': [null, Validators.compose([Validators.required, Validators.pattern('[^ @]*@[^ @]*')])],
      'password': [null, Validators.required]
    });

  }

  onLoginSubmit(loginForm) {
    if(loginForm.valid) {
      console.log(loginForm.value);
      this.authService.login(this.loginForm.value.login, this.loginForm.value.password);
    }
  }

  onRegisterSubmit(registerForm) {
    if (registerForm.valid) {
      console.log(registerForm.value);
      this.authService.signup(this.registerForm.value.login, this.registerForm.value.password);
    }
  }

  ngOnInit() {
  }

}
