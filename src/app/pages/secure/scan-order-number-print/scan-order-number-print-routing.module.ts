import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanOrderNumberPrintPage } from './scan-order-number-print.page';

const routes: Routes = [
  {
    path: '',
    component: ScanOrderNumberPrintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanOrderNumberPrintPageRoutingModule {}
