import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standaard-tarief',
  templateUrl: './standaard-tarief.component.html',
  styleUrls: ['./standaard-tarief.component.css']
})
export class StandaardTariefComponent implements OnInit {

  firstHour = 325;
  additionalHour = 150;

  constructor() { }

  ngOnInit(): void {
  }

}
