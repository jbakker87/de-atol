import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rondvaart',
  templateUrl: './rondvaart.component.html',
  styleUrls: ['./rondvaart.component.css']
})
export class RondvaartComponent implements OnInit {

  firstHour = 325;
  additionalHour = 150;

  constructor() { }

  ngOnInit(): void {
  }

}
