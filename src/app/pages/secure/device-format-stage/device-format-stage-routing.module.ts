import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceFormatStagePage } from './device-format-stage.page';

const routes: Routes = [
  {
    path: '',
    component: DeviceFormatStagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceFormatStagePageRoutingModule {}