import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Capacitor } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';
import { Device } from '@capacitor/device';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  deviceId:string;

  constructor(
    private platform: Platform,
    private loadingController: LoadingController,
    private router: Router,
    private authService: AuthService,
  ) {
    this.initializeApp();
  }

  // Initialize app
  initializeApp() {

    // Wait until platform is ready
    this.platform.ready().then(async () => {
      this.logDeviceInfo();
      // If we're on a mobile platform (iOS / Android), not web
      if (Capacitor.getPlatform() !== 'web') {

        // Set StatusBar style (dark / light)
        await StatusBar.setStyle({ style: Style.Dark });
      }

      // ...
      // do some more config and setup if necessary
      // ...

      // Fake timeout since we do not load any data
      setTimeout(async () => {

        // Hide SplashScreen
        await SplashScreen.hide();
      }, 2000);
    });
  }

  async logDeviceInfo() {
    // const info = await Device.getInfo();
    // console.log(info);
    this.deviceId = (await Device.getId()).identifier;
  };

  async signout(){
    const loading = await this.loadingController.create({
      cssClass: 'default-loading',
      message: '<p>Signing out</p><span>See you again</span>',
      spinner: 'crescent'
    });
    await loading.present();

    this.authService.sessionLogout(this.deviceId).subscribe({
      next: (session) => {
        
        localStorage.removeItem("user");
        localStorage.removeItem("mobility");
        console.log('session:', session);
         // Fake timeout
        setTimeout(async () => {

          // Sign in success
          await this.router.navigate(['/signin']);
          loading.dismiss();
        }, 4000);
        
      },
      error: (error) => {
        loading.dismiss();
        console.error('Error during mobility logout:',error);
        localStorage.removeItem("user");
      }
    });


    // TODO: Add your sign in logic
    // ...

   
  }
}
