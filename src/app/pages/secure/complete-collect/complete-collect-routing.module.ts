import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompleteCollectPage } from './complete-collect.page';

const routes: Routes = [
  {
    path: '',
    component: CompleteCollectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompleteCollectPageRoutingModule {}
