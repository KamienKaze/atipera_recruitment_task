import { Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { PeriodicElement } from '../../interfaces/periodicElement.interface';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';



@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    FormsModule,
    MatDialogContent,
    MatFormField,
    MatLabel,
    MatDialogActions,
    MatDialogClose,
    MatInputModule,
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  readonly dialogRef = inject(MatDialogRef<DialogComponent>);

  public position: number = 0;
  public name: string = '';
  public weight: number = 0;
  public symbol: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: {element: PeriodicElement}) {
    this.position = data.element.position;
    this.name = data.element.name;
    this.weight = data.element.weight;
    this.symbol = data.element.symbol
  }

  onDialogClosed(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
