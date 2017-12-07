import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {Routes, RouterModule} from '@angular/router';

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})

export class BooksListComponent implements OnInit {

  booksObservable: Observable<any>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.booksObservable = this.getBooks('/Books');
    this.addBook('/Books');
    console.log(this.booksObservable);
  }

  getBooks(booksPath): Observable<any> {
    return this.db.list(booksPath).valueChanges();
  }

  addBook(booksPath) {
    this.db.database.ref(booksPath + '/Angular').set({
      title: 'Angular - the complete guide',
      description: 'The complete guide of an Angular framework',
    });
  }

}
