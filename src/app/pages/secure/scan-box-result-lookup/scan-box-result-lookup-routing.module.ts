import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanBoxResultLookupPage } from './scan-box-result-lookup.page';

const routes: Routes = [
  {
    path: '',
    component: ScanBoxResultLookupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanBoxResultLookupPageRoutingModule {}
