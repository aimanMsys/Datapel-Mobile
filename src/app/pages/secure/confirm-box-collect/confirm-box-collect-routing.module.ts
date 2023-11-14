import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmBoxCollectPage } from './confirm-box-collect.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmBoxCollectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmBoxCollectPageRoutingModule {}
