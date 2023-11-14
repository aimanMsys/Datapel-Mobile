import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanlotPage } from './scanlot.page';

const routes: Routes = [
  {
    path: '',
    component: ScanlotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanlotPageRoutingModule {}
