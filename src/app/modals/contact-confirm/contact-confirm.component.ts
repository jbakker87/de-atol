import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-confirm',
  templateUrl: './contact-confirm.component.html',
  styleUrls: ['./contact-confirm.component.css']
})
export class ContactConfirmComponent implements OnInit {

  @Input() showModal;

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.showModal = false;
  }
}
