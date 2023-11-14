import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceFormatPrintPage } from './device-format-print.page';

const routes: Routes = [
  {
    path: '',
    component: DeviceFormatPrintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceFormatPrintPageRoutingModule {}
