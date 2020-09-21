import { _CoalescedStyleScheduler } from '@angular/cdk/table';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Reservation } from 'src/models/reservation';

@Component({
  selector: 'app-reserveringenlijst',
  templateUrl: './reserveringenlijst.component.html',
  styleUrls: ['./reserveringenlijst.component.css']
})
export class ReserveringenlijstComponent implements AfterViewInit {
  private reservations: Reservation[] = [];
  dataSource = new MatTableDataSource<Reservation>();
  displayedColumns: string[] = ['tocht_type', 'aantal_volwassenen', 'aantal_kinderen', 'vaardatum1', 'details', 'update', 'delete'];

  localHostUrl = 'http://localhost:8888';
  serverHost = 'beurs.regelpaneel.com:3306';
  localHostPath = '/list.php';
  listReservations = '/list_reservations.php';
  store = '/store.php';


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllReservations();
  }

  onRowClicked(row: any): void {
    alert('Row clicked: ' + JSON.stringify(row));
    console.log('Row clicked: ', row);
  }

  public getAllReservations(): void {
    this.http.get(this.localHostUrl + this.listReservations).subscribe((result: any) => {
      result.data.forEach(r => {
      this.reservations.push(new Reservation(r));
      this.dataSource.data = this.reservations;
      });
    });
  }
}

