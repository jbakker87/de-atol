import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReserverenZeehondComponent } from '../reserveren-zeehond/reserveren-zeehond.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  msgIsShown = true;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  toggleCorona(): void {
    this.msgIsShown = false;
  }

  openZeehondenDialog(): void {
    const dialogRef = this.dialog.open(ReserverenZeehondComponent, {
      height: '700px',
      width: '100%'
    });

    dialogRef.afterClosed().subscribe(result => {
      // TODO handle form data
      console.log(result);
    });
  }
}
