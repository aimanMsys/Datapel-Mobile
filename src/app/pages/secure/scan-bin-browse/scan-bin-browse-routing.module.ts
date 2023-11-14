import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanBinBrowsePage } from './scan-bin-browse.page';

const routes: Routes = [
  {
    path: '',
    component: ScanBinBrowsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanBinBrowsePageRoutingModule {}
