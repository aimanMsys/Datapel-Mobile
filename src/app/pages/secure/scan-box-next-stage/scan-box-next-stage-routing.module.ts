import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanBoxNextStagePage } from './scan-box-next-stage.page';

const routes: Routes = [
  {
    path: '',
    component: ScanBoxNextStagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanBoxNextStagePageRoutingModule {}
