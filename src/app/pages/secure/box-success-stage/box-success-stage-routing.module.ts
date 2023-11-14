import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoxSuccessStagePage } from './box-success-stage.page';

const routes: Routes = [
  {
    path: '',
    component: BoxSuccessStagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoxSuccessStagePageRoutingModule {}
