import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnterQtyPage } from './enter-qty.page';

const routes: Routes = [
  {
    path: '',
    component: EnterQtyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterQtyPageRoutingModule {}
