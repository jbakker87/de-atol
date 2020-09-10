import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReserverenZeehondComponent } from 'src/app/reserveren-zeehond/reserveren-zeehond.component';

@Component({
  selector: 'app-safari',
  templateUrl: './safari.component.html',
  styleUrls: ['./safari.component.css']
})
export class SafariComponent implements OnInit {

  adultPrice = 17.50;
  childPrice = 12.50;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openZeehondenDialog(): void {
    const dialogRef = this.dialog.open(ReserverenZeehondComponent, {
      height: '700px',
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      // TODO handle form data
    });
  }

}
