import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmBoxStagePage } from './confirm-box-stage.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmBoxStagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmBoxStagePageRoutingModule {}
