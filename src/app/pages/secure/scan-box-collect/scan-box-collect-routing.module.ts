import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanBoxCollectPage } from './scan-box-collect.page';

const routes: Routes = [
  {
    path: '',
    component: ScanBoxCollectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanBoxCollectPageRoutingModule {}
