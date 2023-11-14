import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanCountBrowsePage } from './scan-count-browse.page';

const routes: Routes = [
  {
    path: '',
    component: ScanCountBrowsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanCountBrowsePageRoutingModule {}
