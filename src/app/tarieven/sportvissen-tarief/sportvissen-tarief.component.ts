import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-sportvissen-tarief',
  templateUrl: './sportvissen-tarief.component.html',
  styleUrls: ['./sportvissen-tarief.component.css']
})
export class SportvissenTariefComponent implements OnInit {
  columnsToDisplay: string[] = ['text', 'price'];
  priceSource = new MatTableDataSource<PricesElements>(priceData);
  dataSource: MatTableDataSource<PricesElements>;

  constructor() {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(priceData);
  }

  ngOnInit(): void {
  }

}

export interface PricesElements {
  text: string;
  price: number;
}

const priceData: PricesElements[] = [
  { text: 'Per dag ongeacht aantal personen', price: 540 },
  { text: 'Hengel v.a. (per dag)', price: 10 },
  { text: 'Porties aas v.a.', price: 10 }
];