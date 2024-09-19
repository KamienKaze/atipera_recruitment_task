import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeriodicElement } from '../interfaces/periodicElement.interface';

const DATABASE_URL: string = `https://kamienkaze.github.io/periodicElements.json`;

@Injectable({
  providedIn: 'root'
})
export class PeriodicElementsService {

  constructor(private http: HttpClient) { }

  fetchElements(): Observable<PeriodicElement[]> {
    return this.http.get<PeriodicElement[]>(DATABASE_URL);
  }
}
