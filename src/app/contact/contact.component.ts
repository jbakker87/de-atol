import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name;
  phone;
  email;
  message;

  constructor() { }

  ngOnInit(): void {
  }

  processForm() {
    console.log(`Name is: ${this.name}. Email is: ${this.email}. Phone is: ${this.phone}. Message is: ${this.message}`);
  }
}
