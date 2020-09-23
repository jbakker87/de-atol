import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Meta } from '@angular/platform-browser';
import { ImageModalComponent } from 'src/app/modals/image-modal/image-modal.component';
import { ReserverenZeehondComponent } from 'src/app/reserveren-zeehond/reserveren-zeehond.component';

@Component({
  selector: 'app-safari',
  templateUrl: './safari.component.html',
  styleUrls: ['./safari.component.css']
})
export class SafariComponent implements OnInit {

  adultPrice = 17.50;
  childPrice = 12.50;

  constructor(public dialog: MatDialog, private meta: Meta) { }

  ngOnInit(): void {
    this.meta.updateTag({ name: 'description', content: 'Op de brouwersplaat in de Westerschelde bevindt zich een groep zeehonden. Met laag tij kunnen we de zeehonden van heel dichtbij waarnemen.'});
  }

  openZeehondenDialog(): void {
    const dialogRef = this.dialog.open(ReserverenZeehondComponent, {
      height: '700px',
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      // TODO handle form data
      console.log(result);
    });
  }
  showImage(value): void {
    const dialogRef = this.dialog.open(ImageModalComponent, {
      data: { src: value }
    });
  }

}
