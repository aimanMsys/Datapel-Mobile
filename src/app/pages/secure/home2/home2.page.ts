import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonRouterOutlet, LoadingController, Platform } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Device } from '@capacitor/device';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit,OnDestroy {

  content_loaded: boolean = false;
  deviceId: any;
  private backButtonSubscription: Subscription;

  constructor(
    private router: Router,
    private platform: Platform,
    private loadingController: LoadingController,
    private authService: AuthService,
    private alertController:AlertController,
    private routerOutlet: IonRouterOutlet // Inject IonRouterOutlet
  ) {
    
  }

  ngOnInit() {
    this.platform.backButton.subscribeWithPriority(10, async () => {
      console.log('Handler was called!');
      if (this.router.url === '/home2') {
        const alert = await this.alertController.create({
          header: "Continue to login page?",
          // message: message,
          buttons: [{
            text: 'CANCEL',
            handler: () => {
              alert.dismiss();
            }
          },
        {
          text: 'YES',
            handler: () => {
  
              alert.dismiss();
              this.signout();
            }
        }]
        });
        await alert.present();
      } else {
        // If no alert is shown, navigate back to the previous page
        this.routerOutlet.pop();
      }
      

    });

    this.logDeviceInfo();
    // Fake timeout
    setTimeout(() => {
      this.content_loaded = true;
    }, 2000);
  }


  ionViewWillLeave() {
    // Unsubscribe from back button event when leaving the component
    if (this.backButtonSubscription) {
      this.backButtonSubscription.unsubscribe();
    }
  }

  ngOnDestroy() {
    // Unsubscribe from back button event when leaving the component
    if (this.backButtonSubscription) {
      this.backButtonSubscription.unsubscribe();
    }
  }

  stocklookup(){
    this.router.navigate(['/stock-lookup']);
    
  }

  despatch(){
    this.router.navigate(['/despatch']);
  }

  transfer(){
    this.router.navigate(['/transfer3']);
  }

  binlookup(){
    this.router.navigate(['/bin-lookup']);
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
