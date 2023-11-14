import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabelCountStagePage } from './label-count-stage.page';

const routes: Routes = [
  {
    path: '',
    component: LabelCountStagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabelCountStagePageRoutingModule {}
