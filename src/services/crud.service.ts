import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  localHostUrl = 'http://localhost:8888';
  serverHost = 'beurs.regelpaneel.com:3306';
  localHostPath = '/list.php';
  listReservations = '/list_reservations.php';
  store = '/store.php';

  constructor(private http: HttpClient) { }

  public getData(): any {
    return this.http.get(this.localHostUrl + this.listReservations);
  }

  private createUrl(host: string, path: string): string {
    return `${this.localHostUrl}/${this.localHostPath}`;
  }


}
