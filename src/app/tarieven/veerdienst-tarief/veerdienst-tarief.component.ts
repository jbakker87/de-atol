import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-veerdienst-tarief',
  templateUrl: './veerdienst-tarief.component.html',
  styleUrls: ['./veerdienst-tarief.component.css']
})
export class VeerdienstTariefComponent implements OnInit {
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
  { text: 'Volwassenen', price: 7 },
  { text: 'Kinderen (3 t/m 11 jaar)	', price: 4 },
  { text: 'Fietsen', price: 1 },
  { text: 'Brommers', price: 3 },
  { text: 'Kar', price: 1 }
];
