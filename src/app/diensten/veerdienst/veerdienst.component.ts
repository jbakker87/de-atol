import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageModalComponent } from 'src/app/modals/image-modal/image-modal.component';

@Component({
  selector: 'app-veerdienst',
  templateUrl: './veerdienst.component.html',
  styleUrls: ['./veerdienst.component.css']
})
export class VeerdienstComponent implements OnInit {

  showHansweer = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  showImage(value): void {
    const dialogRef = this.dialog.open(ImageModalComponent, {
      data: { src: value }
    });
    // alert(value);
  }
}
