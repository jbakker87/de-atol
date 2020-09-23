import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Reservation } from 'src/models/reservation';
import { CrudService } from '../../../services/crud.service';
import { ErrorHandlerService } from '../../../services/error-handler.service';
import { ReserveringenDetailsComponent } from '../reserveringen-details/reserveringen-details.component';

@Component({
  selector: 'app-reserveringenlijst',
  templateUrl: './reserveringenlijst.component.html',
  styleUrls: ['./reserveringenlijst.component.css']
})
export class ReserveringenlijstComponent implements AfterViewInit {
  private reservations: Reservation[] = [];
  dataSource = new MatTableDataSource<Reservation>();
  // displayedColumns: string[] = ['tocht_type', 'aantal_volwassenen', 'aantal_kinderen', 'vaardatum1', 'details', 'update', 'delete'];
  displayedColumns: string[] = ['tocht_type', 'aantal_volwassenen', 'aantal_kinderen', 'vaardatum1'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private crudSerivice: CrudService, private errorService: ErrorHandlerService, public dialog: MatDialog) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.getGroupedReservations();
  }

  onRowClicked(row: any): void {
    alert('Row clicked: ' + JSON.stringify(row));
    console.log('Row clicked:', row);
  }

  openDetailsDialog(reservation: Reservation): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '100%';
    dialogConfig.data = reservation;
    const dialogRef = this.dialog.open(ReserveringenDetailsComponent, dialogConfig);
  }

  public getGroupedReservations(): void {
    this.crudSerivice.getGroupedData().subscribe((response: any) => {
      response.data.forEach(r => {
        this.reservations.push(new Reservation(r));
        this.dataSource.data = this.reservations;
      },
      (error) => {
        this.errorService.handleError(error);
      });
    });
  }
}

