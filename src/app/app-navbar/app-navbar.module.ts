import {RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModalComponent } from '../login-modal/login-modal.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [],
  entryComponents: [LoginModalComponent]
})
export class AppNavbarModule { }
