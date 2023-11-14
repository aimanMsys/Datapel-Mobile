import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UrgentbinrefillPageRoutingModule } from './urgentbinrefill-routing.module';

import { UrgentbinrefillPage } from './urgentbinrefill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UrgentbinrefillPageRoutingModule
  ],
  declarations: [UrgentbinrefillPage]
})
export class UrgentbinrefillPageModule {}
