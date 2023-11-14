import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabelCountCollectPage } from './label-count-collect.page';

const routes: Routes = [
  {
    path: '',
    component: LabelCountCollectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabelCountCollectPageRoutingModule {}
