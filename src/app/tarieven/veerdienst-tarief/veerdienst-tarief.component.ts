import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veerdienst-tarief',
  templateUrl: './veerdienst-tarief.component.html',
  styleUrls: ['./veerdienst-tarief.component.css']
})
export class VeerdienstTariefComponent implements OnInit {

  adultPrice = 7;
  childPrice = 4;
  bikePrice = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
