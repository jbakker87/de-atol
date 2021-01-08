import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReservationData } from '../../models/reservation-request';
import { formatDate } from '@angular/common';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { TripType } from '../reserveren/triptype';

@Component({
  selector: 'app-reserveren',
  templateUrl: './reserveren.component.html',
  styleUrls: ['./reserveren.component.css']
})
export class ReserverenComponent implements OnInit {

  reservationForm: FormGroup;
  showModal = false;

  types: TripType[] = [
    {value: 'Safari', viewValue: 'Safari'},
    {value: 'Rondvaart', viewValue: 'Rondvaart'},
    {value: 'Sportvissen', viewValue: 'Sportvissen'},
    {value: 'Asverstrooiing', viewValue: 'Asverstrooiing'},
    {value: 'Scheidingsfeest', viewValue: 'Scheidingsfeest'}
  ];

  constructor(public http: HttpClient) {
    this.reservationForm = this.createFormGroup();
  }

  get name(): AbstractControl {
    return this.reservationForm.get('name');
  }

  get phone(): AbstractControl {
    return this.reservationForm.get('phone');
  }

  get adults(): AbstractControl {
    return this.reservationForm.get('adults');
  }

  get childs(): AbstractControl {
    return this.reservationForm.get('childs');
  }

  get email(): AbstractControl {
    return this.reservationForm.get('email');
  }

  get date1(): AbstractControl {
    return this.reservationForm.get('date1');
  }

  get date2(): AbstractControl {
    return this.reservationForm.get('date2');
  }

  get date3(): AbstractControl {
    return this.reservationForm.get('date3');
  }

  get type(): AbstractControl {
    return this.reservationForm.get('type');
  }

  get msg(): AbstractControl {
    return this.reservationForm.get('msg');
  }

  ngOnInit(): void {
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
        name  : new FormControl('', Validators.required),
        phone : new FormControl(''),
        adults: new FormControl('', Validators.required),
        childs: new FormControl('', Validators.required),
        email : new FormControl('', [Validators.required, Validators.email]),
        date1 : new FormControl('', Validators.required),
        date2 : new FormControl(''),
        date3 : new FormControl(''),
        type  : new FormControl('', Validators.required),
        msg   : new FormControl(''),
    });
  }

  setFormatFor(date): any {
    return date === '' ? '' : formatDate(date, 'dd-MM-yyyy', 'en-US');
  }

  setFormatFor1(date): any {
    return date === '' ? '' : formatDate(date, 'yyyyMMdd', 'en-US');
  }

  onSubmit(): void {
    const reservation: ReservationData = {
      name: this.name.value,
      phone: this.phone.value,
      adults: this.adults.value,
      childs: this.childs.value,
      email: this.email.value,
      date1: this.setFormatFor(this.date1.value),
      date2: this.setFormatFor(this.date2.value),
      date3: this.setFormatFor(this.date3.value),
      type: this.type.value,
      msg: this.msg.value
    };
    console.log(reservation);
    this.http.post('https://www.de-atol.nl/httpdocs/mail_send.php', (reservation)).subscribe(
      (response) => {console.log(response)},
      (error) => {console.log(error)}
    );

    this.openModal();
    this.scrollToTop();
    this.resetForm();
  }
  
  resetForm(): void {
    // this.reservationForm.clearValidators();
    this.reservationForm.reset();
  }

  openModal(): void {
    this.showModal = true;
  }

  scrollToTop(): void {
    window.scrollTo( 0 , 0 );
  }
}
