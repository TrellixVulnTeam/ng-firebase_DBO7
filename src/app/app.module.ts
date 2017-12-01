import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

// Firebase

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { BooksListComponent } from './books-list/books-list.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { AppNavbarModule } from './app-navbar/app-navbar.module';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    BooksListComponent,
    LoginModalComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    AppNavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
