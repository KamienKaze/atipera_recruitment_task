import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PeriodicElement } from '../interfaces/periodicElement.interface';
import { DataSource } from '@angular/cdk/collections';
import { PeriodicElementsService } from './periodic-elements.service';

@Injectable({
  providedIn: 'root'
})
export class PeriodicElementsDataSourceService extends DataSource<PeriodicElement> {

  constructor(private periodicElementsService: PeriodicElementsService) {
    super();
  }

  periodicElements$ = new BehaviorSubject<PeriodicElement[]>([]);
  isLoading$ = new BehaviorSubject<boolean>(false);

  connect(): Observable<PeriodicElement[]> {
    return this.periodicElements$.asObservable();
  }

  disconnect(): void {
    this.periodicElements$.complete();
  }

  loadElements(): void {
    this.isLoading$.next(true);
    this.periodicElementsService.fetchElements().subscribe((periodicElements) => {
      this.periodicElements$.next(periodicElements);
    });
    this.isLoading$.next(false);
  }
}
