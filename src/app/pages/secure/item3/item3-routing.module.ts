import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Item3Page } from './item3.page';

const routes: Routes = [
  {
    path: '',
    component: Item3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Item3PageRoutingModule {}
