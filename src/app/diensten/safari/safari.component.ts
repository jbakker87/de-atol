import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safari',
  templateUrl: './safari.component.html',
  styleUrls: ['./safari.component.css']
})
export class SafariComponent implements OnInit {

  adultPrice = 17.50;
  childPrice = 12.50;

  constructor() { }

  ngOnInit(): void {
  }

}
