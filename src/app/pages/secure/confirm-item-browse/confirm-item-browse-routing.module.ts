import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmItemBrowsePage } from './confirm-item-browse.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmItemBrowsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmItemBrowsePageRoutingModule {}
