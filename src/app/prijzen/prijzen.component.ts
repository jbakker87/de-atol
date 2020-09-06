import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prijzen',
  templateUrl: './prijzen.component.html',
  styleUrls: ['./prijzen.component.css']
})
export class PrijzenComponent implements OnInit {

  adultPrice = 7;
  childPrice = 4;
  bikePrice = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
