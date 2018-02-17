import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';
import { ConfirmTestComponent } from './confirm-test/confirm-test.component';

@NgModule({
  imports: [
    CommonModule,
    ExampleRoutingModule
  ],
  declarations: [ConfirmTestComponent]
})
export class ExampleModule { }
