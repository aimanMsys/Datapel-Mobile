import { Component, HostListener } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Capacitor } from '@capacitor/core';
import { AlertController, Platform } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';
import { Device } from '@capacitor/device';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { Keyboard } from '@capacitor/keyboard';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  deviceId:string;

  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;
  title = 'angular-idle-timeout';
  keyboardVisible: boolean = false; 

  constructor(
    private platform: Platform,
    private loadingController: LoadingController,
    private router: Router,
    private authService: AuthService,
    private idle: Idle, 
    private keepalive: Keepalive,
    private alertController:AlertController,
  ) {
    this.initializeApp();
    
    const { Keyboard } = Plugins;
    Keyboard.hide();
    // this.listenToKeyboardEvents();



    // idle.setIdle(5);
    // // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
    // idle.setTimeout(5);
    // // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    // idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    // idle.onIdleEnd.subscribe(() => { 
    //   this.idleState = 'No longer idle.'
    //   console.log(this.idleState);
    //   this.reset();
    // });
    
    // idle.onTimeout.subscribe(() => {
    //   this.idleState = 'Timed out!';
    //   this.timedOut = true;
    //   console.log(this.idleState);
    //   this.router.navigate(['/']);
    // });
    
    // idle.onIdleStart.subscribe(() => {
    //     this.idleState = 'You\'ve gone idle!'
    //     console.log(this.idleState);
    //     // this.childModal.show();
    //     this.presentAlert("timeOut","msg");
    // });
    
    // idle.onTimeoutWarning.subscribe((countdown) => {
    //   this.idleState = 'You will time out in ' + countdown + ' seconds!'
    //   console.log(this.idleState);
    // });

    // // sets the ping interval to 15 seconds
    // keepalive.interval(15);

    // keepalive.onPing.subscribe(() => this.lastPing = new Date());

    // this.reset();
  }

  // // Toggle the keyboard based on the ion-toggle state
  // toggleKeyboard(event: any) {
  //   if (event.detail.checked) {
  //     Keyboard.show();  // Show keyboard when toggle is switched on
  //   } else {
  //     Keyboard.hide();  // Hide keyboard when toggle is switched off
  //   }
  // }

  // // Optional: Track keyboard visibility based on keyboard events
  // listenToKeyboardEvents() {
  //   Keyboard.addListener('keyboardDidShow', () => {
  //     this.keyboardVisible = true;
  //   });

  //   Keyboard.addListener('keyboardDidHide', () => {
  //     this.keyboardVisible = false;
  //   });
  // }


  onToggleKeyboard(event: any) {
    this.authService.toggleKeyboard(event.detail.checked);
  }

  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
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
      }, 0);
    });
  }

  @HostListener('focus', ['$event.target'])
  onFocus() {
    // Allow the input to be focused, but hide the keyboard
    setTimeout(() => {
      Keyboard.hide();  // Hide the keyboard immediately after focus
    }, 10); // Small delay to ensure focus event completes
  }

  // Hide keyboard globally on any input blur event
  hideKeyboardForAllInputs() {
    const inputs = document.querySelectorAll('input, textarea, ion-input, ion-textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', () => {
        Keyboard.hide(); // Hide keyboard when the input loses focus
      });
    });
  }

  async presentAlert(headerText:string,message:string): Promise<void> {
    const alert = await this.alertController.create({
      header: headerText,
      message: message,
      buttons: [{
        text: 'OK',
        handler: () => {
          alert.dismiss();
        }
      }]
    });
    await alert.present();

    await alert.onDidDismiss();
  }

  async logDeviceInfo() {
    // const info = await Device.getInfo();
    // console.log(info);
    this.deviceId = (await Device.getId()).identifier;
    console.log(this.deviceId);
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
        
        this.authService.stopInterval();
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
