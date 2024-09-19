import { Component, inject, model, OnInit, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { DialogComponent } from '../../dialog/dialog/dialog.component';
import { PeriodicElement } from '../../interfaces/periodicElement.interface';
import { PeriodicElementsDataSourceService } from '../../services/periodic-elements-data-source.service';
import { PeriodicElementsService } from '../../services/periodic-elements.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: PeriodicElementsDataSourceService | null = null;

  readonly dialog = inject(MatDialog);

  constructor(private PeriodicElementsService: PeriodicElementsService) {
    this.dataSource = new PeriodicElementsDataSourceService(this.PeriodicElementsService);
  }

  ngOnInit(): void {
    this.dataSource?.loadElements();
  }

  openEditDialog(element: PeriodicElement): void {

    let dialogRef = this.dialog.open(DialogComponent, {
      data: { element: element },
    });
  }
}
