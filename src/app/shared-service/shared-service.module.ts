import { NgModule, ModuleWithProviders  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogService } from './confirm-dialog/confirm-dialog.service';

@NgModule()
export class SharedServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedServiceModule,
      providers: [ConfirmDialogService],
    };
  }
}
