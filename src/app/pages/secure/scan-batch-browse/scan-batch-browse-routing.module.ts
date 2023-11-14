import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanBatchBrowsePage } from './scan-batch-browse.page';

const routes: Routes = [
  {
    path: '',
    component: ScanBatchBrowsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanBatchBrowsePageRoutingModule {}
