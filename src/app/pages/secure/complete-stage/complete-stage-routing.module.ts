import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompleteStagePage } from './complete-stage.page';

const routes: Routes = [
  {
    path: '',
    component: CompleteStagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompleteStagePageRoutingModule {}
