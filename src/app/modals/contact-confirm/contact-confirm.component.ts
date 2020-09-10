import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-confirm',
  templateUrl: './contact-confirm.component.html',
  styleUrls: ['./contact-confirm.component.css']
})
export class ContactConfirmComponent implements OnInit {

  showModal = true;

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.showModal = false;
  }
}
