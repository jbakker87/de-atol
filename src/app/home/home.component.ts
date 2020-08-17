import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  private _msgIsShown = true;

  constructor() { }

  ngOnInit(): void {
  }

  get msgIsShown() {
    return this._msgIsShown;
  }
  
  set msgIsShown(value) {
    this._msgIsShown = value;
  }

  toggleCorona(): void {
    this.msgIsShown = false;
  }

}
