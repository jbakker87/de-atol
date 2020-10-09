import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Meta } from '@angular/platform-browser';
import { ImageModalComponent } from 'src/app/modals/image-modal/image-modal.component';

@Component({
  selector: 'app-veerdienst',
  templateUrl: './veerdienst.component.html',
  styleUrls: ['./veerdienst.component.css']
})
export class VeerdienstComponent implements OnInit {

  msgIsShown = true;

  toggleReservation(): void {
    this.msgIsShown = false;
  }

  constructor(public dialog: MatDialog, private meta: Meta) { }

  ngOnInit(): void {
    this.meta.updateTag({ name: 'description', content: 'Elke zomer kunt u gebruik maken van onze veerdienst tussen Hansweert en Perkpolder.'});
  } 

  showImage(value): void {
    const dialogRef = this.dialog.open(ImageModalComponent, {
      data: { src: value }
    });
  }
}
