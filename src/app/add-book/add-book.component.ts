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
      'title': [null, Validators.required],
      'description': [null, Validators.required]
    });

  }

  addBookSubmit(addBookForm) {
    if (addBookForm.valid) {
      console.log('Dodano książkę: ', addBookForm.value);
      this.db.database.ref('/' + firebase.auth().currentUser.uid).child('Books').child(this.addBookForm.value.title).set({
        title: this.addBookForm.value.title,
        description: this.addBookForm.value.description
      });
    }
  }

  ngOnInit() {
  }

}
