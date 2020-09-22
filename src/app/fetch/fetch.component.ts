import { formatDate, JsonPipe } from '@angular/common';
import { HttpClient, JsonpInterceptor } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Passagier } from '../../models/passagier';
import { Reservation } from '../../models/reservation';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';
import { from } from 'rxjs';


@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {

  peoples = [];
  reservations = [];

  localHost = 'http://localhost:8888/';
  serverHost = 'beurs.regelpaneel.com:3306/';
  list = 'list.php';
  listReservations = 'list_reservations.php';
  store = 'store.php';

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.fetchPeople();
  }

  fetchPeople(): void {
    this.peoples = [];

    this.http.get(this.localHost + this.list).subscribe((result: any) => {
      result.data.forEach(p => {
      this.peoples.push(new Passagier(p));
      });
    });
  }

  fetchReservations(): void {
    this.reservations = [];

    this.http.get(this.localHost + this.listReservations).subscribe((result: any) => {
      result.data.forEach(r => {
      this.reservations.push(new Reservation(r));
    });
      const source = from(this.reservations);
      const example = source.pipe(
      groupBy(r => r.vaardatum1),
      mergeMap(group => group.pipe(toArray())));
      const subscribe = example.subscribe(val => console.log(val));
    });
  }

  onPost(): void {
    const reservatie = {
      tocht_type: 'safari',
      aantal_volwassenen: 10,
      aantal_kinderen: 10,
      vaardatum1: formatDate('1993-03-24', 'yyyyMMdd h:mm:ss a', 'en-US'),
      vaardatum2: '' ,
      vaardatum3: '' ,
      datum_reservatie: formatDate(new Date(), 'yyyyMMdd h:mm:ss a', 'en-US')
    };

    console.log(reservatie);

    this.http.post(this.localHost + 'store_reservation.php', (reservatie)).subscribe(
      (response) => {console.log(response); },
      (error) => {console.log(error); }
    );
  }
}
