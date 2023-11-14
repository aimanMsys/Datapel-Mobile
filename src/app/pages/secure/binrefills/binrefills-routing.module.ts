import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BinrefillsPage } from './binrefills.page';

const routes: Routes = [
  {
    path: '',
    component: BinrefillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BinrefillsPageRoutingModule {}
