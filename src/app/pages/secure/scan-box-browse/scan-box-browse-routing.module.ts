import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanBoxBrowsePage } from './scan-box-browse.page';

const routes: Routes = [
  {
    path: '',
    component: ScanBoxBrowsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanBoxBrowsePageRoutingModule {}
