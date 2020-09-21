import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nadropdown',
  templateUrl: './nadropdown.component.html',
  styleUrls: ['./nadropdown.component.css']
})
export class NadropdownComponent implements OnInit {

  isDroppedDown = false;

  msgs = [
    {value: 'steak-0', viewValue: 'Dit jaar zijn er geen veerdiensten meer.'}
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
