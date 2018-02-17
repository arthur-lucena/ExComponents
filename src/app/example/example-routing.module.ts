import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmTestComponent } from './confirm-test/confirm-test.component';

const routes: Routes = [
  {path: 'confirm-test', component: ConfirmTestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRoutingModule { }
