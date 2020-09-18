import { formatDate } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  type: string;
  adult: number;
  child: number;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { type: 'Safari', adult: 2, child: 1, date: formatDate('1993-03-24', 'dd-MM-yyyy', 'en-US') },
  { type: 'Rondvaart', adult: 1, child: 3, date: formatDate('1993-03-24', 'dd-MM-yyyy', 'en-US') },
  { type: 'Scheiding', adult: 7, child: 2, date: formatDate('1993-03-24', 'dd-MM-yyyy', 'en-US') },
  { type: 'Safari', adult: 2, child: 1, date: formatDate('1993-03-24', 'dd-MM-yyyy', 'en-US') },
  { type: 'Rondvaart', adult: 1, child: 3, date: formatDate('1993-03-24', 'dd-MM-yyyy', 'en-US') },
  { type: 'Scheiding', adult: 7, child: 2, date: formatDate('1993-03-24', 'dd-MM-yyyy', 'en-US') },
  { type: 'Safari', adult: 2, child: 1, date: formatDate('1993-03-24', 'dd-MM-yyyy', 'en-US') },
  { type: 'Rondvaart', adult: 1, child: 3, date: formatDate('1993-03-24', 'dd-MM-yyyy', 'en-US') },
  { type: 'Scheiding', adult: 7, child: 2, date: formatDate('1993-03-24', 'dd-MM-yyyy', 'en-US') },
  { type: 'Safari', adult: 2, child: 1, date: formatDate('1993-03-24', 'dd-MM-yyyy', 'en-US') },
  { type: 'Rondvaart', adult: 1, child: 3, date: formatDate('1993-03-24', 'dd-MM-yyyy', 'en-US') },
  { type: 'Scheiding', adult: 7, child: 2, date: formatDate('1993-03-24', 'dd-MM-yyyy', 'en-US') },
  { type: 'Sportvissen', adult: 8, child: 8, date: formatDate('1993-03-24', 'dd-MM-yyyy', 'en-US') }
];

@Component({
  selector: 'app-table-mat',
  templateUrl: './table-mat.component.html',
  styleUrls: ['./table-mat.component.css']
})
export class TableMatComponent implements AfterViewInit {
  displayedColumns: string[] = ['type', 'adult', 'child', 'date'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onRowClicked(row: any): void {
    alert('Row clicked: ' + JSON.stringify(row));
    console.log('Row clicked: ', row);
  }
}