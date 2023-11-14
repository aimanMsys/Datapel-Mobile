import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransScanbatchPage } from './trans-scanbatch.page';

const routes: Routes = [
  {
    path: '',
    component: TransScanbatchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransScanbatchPageRoutingModule {}
