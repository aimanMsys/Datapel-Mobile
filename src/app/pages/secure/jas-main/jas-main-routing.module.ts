import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JasMainPage } from './jas-main.page';

const routes: Routes = [
  {
    path: '',
    component: JasMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JasMainPageRoutingModule {}
