import { NgModule, ModuleWithProviders  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { SharedServiceModule } from '../shared-service/shared-service.module';

@NgModule({
  imports: [
    CommonModule,
    SharedServiceModule.forRoot(),
  ],
  exports: [ConfirmDialogComponent],
  declarations: [ConfirmDialogComponent],
})
export class SharedModule { }
