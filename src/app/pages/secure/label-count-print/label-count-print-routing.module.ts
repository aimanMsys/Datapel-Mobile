import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabelCountPrintPage } from './label-count-print.page';

const routes: Routes = [
  {
    path: '',
    component: LabelCountPrintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabelCountPrintPageRoutingModule {}
