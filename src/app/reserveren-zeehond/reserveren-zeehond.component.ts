import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { VaarDatum, vaarData } from './dates';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reserveren-zeehond',
  templateUrl: './reserveren-zeehond.component.html',
  styleUrls: ['./reserveren-zeehond.component.css']
})
export class ReserverenZeehondComponent implements OnInit {

  reserverenForm: FormGroup = new FormGroup({
    naam: new FormControl(),
    adres: new FormControl(),
    postcode: new FormControl(),
    woonplaats: new FormControl(),
    telnr: new FormControl(),
    email: new FormControl(),
    datum: new FormControl(),
    pax: new FormControl()
  });

  minDate = new Date('2020-9-1');
  maxDate = new Date('2020-9-30');

  selectedDate: VaarDatum;

  constructor(public dialogRef: MatDialogRef<ReserverenZeehondComponent>) {}

  get options(): number[] {
    return Array(this.selectedDate.pax);
  }

  filter = (d: Date | null): boolean => {
    return this.isInDates(d);
  }

  isInDates(value): boolean {
    return !!this.findDate(value);
  }

  findDate(value): VaarDatum {
    return vaarData.find(item => item.date.getTime() === value.getTime());
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.dialogRef.close(this.reserverenForm.value);
  }

  onDateChange(event: MatDatepickerInputEvent<Date>): void {
    this.selectedDate = this.findDate(event.value);
  }

}
