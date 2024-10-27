import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Interceptor } from './services/interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ReactiveForms
import { ReactiveFormsModule } from '@angular/forms';

// NgCharts
import { NgChartsModule } from 'ng2-charts';



import { NgIdleKeepaliveModule } from '@ng-idle/keepalive'; // this includes the core NgIdleModule but includes keepalive providers for easy wireup
import { HideKeyboardModule } from 'hide-keyboard';
// import { MomentModule } from 'angular2-moment'; 

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot({ mode: 'ios' }), 
    ReactiveFormsModule, 
    AppRoutingModule, 
    NgChartsModule,
    HttpClientModule, 
    NgIdleKeepaliveModule.forRoot(),
    HideKeyboardModule
    // MomentModule,
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },{ provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule { }
