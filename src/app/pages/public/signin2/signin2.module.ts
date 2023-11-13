import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Signin2PageRoutingModule } from './signin2-routing.module';

import { Signin2Page } from './signin2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule  ,
    Signin2PageRoutingModule
  ],
  declarations: [Signin2Page]
})
export class Signin2PageModule {}
