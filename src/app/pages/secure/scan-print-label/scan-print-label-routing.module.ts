import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanPrintLabelPage } from './scan-print-label.page';

const routes: Routes = [
  {
    path: '',
    component: ScanPrintLabelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanPrintLabelPageRoutingModule {}
