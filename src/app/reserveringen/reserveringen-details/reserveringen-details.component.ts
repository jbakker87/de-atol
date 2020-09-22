import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-reserveringen-details',
  templateUrl: './reserveringen-details.component.html',
  styleUrls: ['./reserveringen-details.component.css']
})
export class ReserveringenDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
