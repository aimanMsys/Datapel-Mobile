import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DespatchPage } from './despatch.page';

const routes: Routes = [
  {
    path: '',
    component: DespatchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DespatchPageRoutingModule {}
