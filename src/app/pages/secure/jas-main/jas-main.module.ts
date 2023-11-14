import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JasMainPageRoutingModule } from './jas-main-routing.module';

import { JasMainPage } from './jas-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JasMainPageRoutingModule
  ],
  declarations: [JasMainPage]
})
export class JasMainPageModule {}
