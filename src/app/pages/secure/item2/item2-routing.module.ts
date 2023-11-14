import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Item2Page } from './item2.page';

const routes: Routes = [
  {
    path: '',
    component: Item2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Item2PageRoutingModule {}
