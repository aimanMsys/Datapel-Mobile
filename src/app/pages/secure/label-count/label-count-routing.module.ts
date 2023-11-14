import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabelCountPage } from './label-count.page';

const routes: Routes = [
  {
    path: '',
    component: LabelCountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabelCountPageRoutingModule {}
