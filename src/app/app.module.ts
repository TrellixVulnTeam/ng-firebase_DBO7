import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginModalService } from './login-modal.service';
import { AddBookComponent } from './add-book/add-book.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'books-list', component: BooksListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    BooksListComponent,
    LoginModalComponent,
    AddBookComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    AppNavbarModule,
  ],
  providers: [LoginModalService],
  bootstrap: [AppComponent]
})

export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
.catch((err: any) => console.error(err));
