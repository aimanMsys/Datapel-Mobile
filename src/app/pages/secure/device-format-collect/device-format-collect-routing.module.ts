import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceFormatCollectPage } from './device-format-collect.page';

const routes: Routes = [
  {
    path: '',
    component: DeviceFormatCollectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceFormatCollectPageRoutingModule {}
