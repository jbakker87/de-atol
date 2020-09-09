import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-confirm',
  templateUrl: './contact-confirm.component.html',
  styleUrls: ['./contact-confirm.component.css']
})
export class ContactConfirmComponent implements OnInit {

  @Output()
  closeModal = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleModal(): void { this.closeModal.emit(); }
}