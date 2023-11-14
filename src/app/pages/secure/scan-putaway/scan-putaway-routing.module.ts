import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanPutawayPage } from './scan-putaway.page';

const routes: Routes = [
  {
    path: '',
    component: ScanPutawayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanPutawayPageRoutingModule {}
