import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageModalComponent } from 'src/app/modals/image-modal/image-modal.component';

@Component({
  selector: 'app-sportvissen',
  templateUrl: './sportvissen.component.html',
  styleUrls: ['./sportvissen.component.css']
})
export class SportvissenComponent implements OnInit {


  dayPrice = 540;
  hengelPrice = 10;
  baitPrice = 10;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  showImage(value): void {
    const dialogRef = this.dialog.open(ImageModalComponent, {
      data: { src: value }
    });
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
