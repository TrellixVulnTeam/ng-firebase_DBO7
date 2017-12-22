import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Routes, RouterModule } from '@angular/router';

// Firebase
import * as firebase from 'firebase/app';

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})

export class BooksListComponent implements OnInit {

  booksObservable: Observable<any>;

  constructor(private db: AngularFireDatabase) {
    try {
      this.booksObservable = this.db.list('/' + firebase.auth().currentUser.uid + '/Books').valueChanges();
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit() {
    console.log(this.booksObservable);
  }

  getBooks(booksPath): Observable<any> {
    return this.db.list(booksPath).valueChanges();
  }

  deleteBook(title: string) {
    this.db.object('/' + firebase.auth().currentUser.uid + '/Books/' + title).remove();
    console.log(this.db.object('/' + title));
  }

}
