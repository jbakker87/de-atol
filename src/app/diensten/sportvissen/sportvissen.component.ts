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

export interface PricesElements {
  text: string;
  price: number;
}

const priceData: PricesElements[] = [
  { text: 'Basistarief 1é vaaruur', price: 325 },
  { text: 'Extra volguren', price: 150 },
];
