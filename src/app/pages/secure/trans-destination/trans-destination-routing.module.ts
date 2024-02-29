import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransDestinationPage } from './trans-destination.page';

const routes: Routes = [
  {
    path: '',
    component: TransDestinationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransDestinationPageRoutingModule {}
