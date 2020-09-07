import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sportvissen',
  templateUrl: './sportvissen.component.html',
  styleUrls: ['./sportvissen.component.css']
})
export class SportvissenComponent implements OnInit {


  dayPrice = 540;
  hengelPrice = 10;
  baitPrice = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
