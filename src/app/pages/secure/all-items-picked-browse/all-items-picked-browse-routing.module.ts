import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllItemsPickedBrowsePage } from './all-items-picked-browse.page';

const routes: Routes = [
  {
    path: '',
    component: AllItemsPickedBrowsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllItemsPickedBrowsePageRoutingModule {}
