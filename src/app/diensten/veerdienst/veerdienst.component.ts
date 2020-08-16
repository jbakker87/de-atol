import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veerdienst',
  templateUrl: './veerdienst.component.html',
  styleUrls: ['./veerdienst.component.css']
})
export class VeerdienstComponent implements OnInit {

  adultPrice = 7;
  childPrice = 4;
  bikePrice = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
