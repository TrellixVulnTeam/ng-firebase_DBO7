import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  addBookForm: FormGroup;
  booksPath = '/Books';

  constructor(private fb: FormBuilder, private db: AngularFireDatabase) {
    this.addBookForm = fb.group({
      'title': [null, Validators.required],
      'description': [null, Validators.required]
    });
  }

  addBookSubmit(addBookForm) {
    if (addBookForm.valid) {
      console.log('Dodano książkę: ', addBookForm.value);
      this.db.database.ref(this.booksPath + this.addBookForm.value.title).set({
        title: this.addBookForm.value.title,
        description: this.addBookForm.value.description
      });
    }
  }

  addBook(booksPath) {
    this.db.database.ref(booksPath + '/Angular').set({
      title: 'Angular - the complete guide',
      description: 'The complete guide of an Angular framework',
    });
  }

  ngOnInit() {

  }

}
