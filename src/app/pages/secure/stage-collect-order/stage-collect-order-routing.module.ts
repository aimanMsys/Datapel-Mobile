import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StageCollectOrderPage } from './stage-collect-order.page';

const routes: Routes = [
  {
    path: '',
    component: StageCollectOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StageCollectOrderPageRoutingModule {}
