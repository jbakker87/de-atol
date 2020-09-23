import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Meta } from '@angular/platform-browser';
import { ReserverenZeehondComponent } from '../reserveren-zeehond/reserveren-zeehond.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  msgIsShown = true;
  constructor(public dialog: MatDialog, private meta: Meta) { }

  toggleCorona(): void {
    this.msgIsShown = false;
  }

  ngOnInit(): void {
    this.meta.updateTag({ name: 'description', content: 'De-Atol is hét rondvaartbedrijf dat opereert in Zeeuws-Vlaanderen. Wij verzorgen al meer dan een halve eeuw rondvaarten, bedrijfsevenementen, excursies en dagtochten op bijvoorbeeld de Ooster- of Westerschelde.'});
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
