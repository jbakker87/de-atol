import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veerdienst-ndraopdown',
  templateUrl: './veerdienst-nadropdown.component.html',
  styleUrls: ['./veerdienst-nadropdown.component.css']
})
export class VeerdienstNadropdownComponent implements OnInit {

  isDroppedDown = false;

  msgs = [
    {value: 'steak-0', viewValue: 'Dit jaar zijn er geen veerdiensten meer.'}
  ];

  constructor() { }

  ngOnInit(): void {
  }
}