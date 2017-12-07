import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  addBookForm: FormGroup;
  booksPath = '/Books';
  user = firebase.auth().currentUser;

  constructor(private fb: FormBuilder, private db: AngularFireDatabase) {
    this.addBookForm = fb.group({
      'path' : [null, Validators.required],
      'title': [null, Validators.required],
      'description': [null, Validators.required]
    });
    this.getUserToken();
  }

  addBookSubmit(addBookForm) {
    if (addBookForm.valid) {
      console.log('Dodano książkę: ', addBookForm.value);
      this.db.database.ref('/Books' + '/' + this.addBookForm.value.path).set({
        title: this.addBookForm.value.title,
        description: this.addBookForm.value.description,
        //clientId : 
      });
    }
  }

  addBook(booksPath) {
    this.db.database.ref(booksPath + '/Angular').set({
      title: 'Angular - the complete guide',
      description: 'The complete guide of an Angular framework',
    });
  }

  getUserToken() {
    this.db.app.auth().currentUser.getIdToken().then((data) => {
      localStorage.setItem('token', data);
    });
  }

  ngOnInit() {
  }

}
