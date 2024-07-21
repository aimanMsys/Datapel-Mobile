import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TwoFactorVerificationPageRoutingModule } from './two-factor-verification-routing.module';

import { TwoFactorVerificationPage } from './two-factor-verification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TwoFactorVerificationPageRoutingModule,    
    ReactiveFormsModule
  ],
  declarations: [TwoFactorVerificationPage]
})
export class TwoFactorVerificationPageModule {}
