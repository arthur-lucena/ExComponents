import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { SharedServiceModule } from '../shared-service/shared-service.module';

import { ExampleRoutingModule } from './example-routing.module';
import { ConfirmTestComponent } from './confirm-test/confirm-test.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SharedServiceModule.forRoot(),
    ExampleRoutingModule
  ],
  declarations: [ConfirmTestComponent]
})
export class ExampleModule { }
