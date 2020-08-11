import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-reserveren',
  templateUrl: './reserveren.component.html',
  styleUrls: ['./reserveren.component.css']
})
export class ReserverenComponent implements OnInit {

  name: string;
  address: string;
  postalcode: string;
  city: string;
  phone: string;
  adults: number;
  childs: number;
  email: string;
  date1: Date;
  date2: Date;
  date3: Date;
  type: string;
  zeehond: string;
  rondvaart: string;
  sportvissen: string;

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(): void {
    const msg = `My name is ${this.name}`
    alert(msg);
  }
}
