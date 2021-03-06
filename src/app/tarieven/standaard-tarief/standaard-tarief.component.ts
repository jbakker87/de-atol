import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-standaard-tarief',
  templateUrl: './standaard-tarief.component.html',
  styleUrls: ['./standaard-tarief.component.css']
})
export class StandaardTariefComponent implements OnInit {
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
  { text: 'Basistarief 1é vaaruur', price: 325 },
  { text: 'Extra volguren', price: 150 },
];
