import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Meta } from '@angular/platform-browser';
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

  constructor(public dialog: MatDialog, private meta: Meta) { }

  ngOnInit(): void {
    this.meta.updateTag({ name: 'description', content: 'met rondvaartbedrijf De-Atol kom je in dieper water te vissen en maak je kans op wat grotere vis en grotere soorten zoals gul, wijting en platvis.'});
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
