import { JsonPipe } from '@angular/common';
import { HttpClient, JsonpInterceptor } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Passagier } from '../../models/passagier';


@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {

  products = [];

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(): void {

    // this.http.get('https://beta.de-atol.nl/httpdocs/' + 'list.php', (passagier)).subscribe(
    //   (response) => { console.log(response); },
    //   (error) => { console.log(error); }
    // );

    const passagier: Passagier = {
      email: '',
      voornaam: '',
      achternaam: '',
      passagierId: 0
    };

    this.http.get<Passagier>('https://beta.de-atol.nl/httpdocs/' + 'list.php').subscribe((data: Passagier) => {
    passagier.achternaam = data['data']['0'].achternaam;
    passagier.voornaam = data['data']['0'].voornaam;
    passagier.email = data['data']['0'].email;
    passagier.passagierId = data['data']['0'].passagierId;
    console.log(passagier);
    });
  }
}
