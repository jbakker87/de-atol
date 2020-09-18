import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageModalComponent } from 'src/app/modals/image-modal/image-modal.component';

@Component({
  selector: 'app-rondvaart',
  templateUrl: './rondvaart.component.html',
  styleUrls: ['./rondvaart.component.css']
})
export class RondvaartComponent implements OnInit {

  firstHour = 325;
  additionalHour = 150;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  showImage(value): void {
    const dialogRef = this.dialog.open(ImageModalComponent, {
      data: { src: value }
    });
  }

}
