import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BinLookupPage } from './bin-lookup.page';

const routes: Routes = [
  {
    path: '',
    component: BinLookupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BinLookupPageRoutingModule {}
