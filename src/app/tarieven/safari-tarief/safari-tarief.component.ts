import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-safari-tarief',
  templateUrl: './safari-tarief.component.html',
  styleUrls: ['./safari-tarief.component.css']
})
export class SafariTariefComponent implements OnInit {
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
  { text: 'Volwassenen', price: 17.50 },
  { text: 'Kinderen (3 t/m 11 jaar)', price: 12.50 }
];