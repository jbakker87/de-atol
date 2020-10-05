import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safari-nadropdown',
  templateUrl: './safari-nadropdown.component.html',
  styleUrls: ['./safari-nadropdown.component.css']
})
export class SafariNadropdownComponent implements OnInit {
  
  isDroppedDown = false;

  msgs = [
    {value: 'steak-0', viewValue: 'Momenteel zijn er geen safari\'s.'}
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
