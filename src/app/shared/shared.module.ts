import { NgModule, ModuleWithProviders  } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatTableModule,
  MatTooltipModule
} from '@angular/material';

import { ConfirmDialogComponent, ConfirmDialogModalComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule,
    MatTooltipModule,
  ],
  exports: [ConfirmDialogComponent],
  declarations: [ConfirmDialogComponent, ConfirmDialogModalComponent],
  entryComponents: [ConfirmDialogModalComponent],
})
export class SharedModule { }
