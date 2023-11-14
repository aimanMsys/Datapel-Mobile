import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanNextBoxCollectPage } from './scan-next-box-collect.page';

const routes: Routes = [
  {
    path: '',
    component: ScanNextBoxCollectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanNextBoxCollectPageRoutingModule {}
