import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransScanpickbinPage } from './trans-scanpickbin.page';

const routes: Routes = [
  {
    path: '',
    component: TransScanpickbinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransScanpickbinPageRoutingModule {}
