import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanStagingAreaStagePage } from './scan-staging-area-stage.page';

const routes: Routes = [
  {
    path: '',
    component: ScanStagingAreaStagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanStagingAreaStagePageRoutingModule {}
