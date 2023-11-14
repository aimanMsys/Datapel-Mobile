import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanLotBrowsePage } from './scan-lot-browse.page';

const routes: Routes = [
  {
    path: '',
    component: ScanLotBrowsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanLotBrowsePageRoutingModule {}
