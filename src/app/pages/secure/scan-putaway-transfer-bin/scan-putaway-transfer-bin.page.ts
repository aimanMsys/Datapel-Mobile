import { AfterContentChecked, ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { SwiperOptions, Pagination } from 'swiper';
import { AlertController, IonRouterOutlet, LoadingController, ModalController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scan-putaway-transfer-bin',
  templateUrl: './scan-putaway-transfer-bin.page.html',
  styleUrls: ['./scan-putaway-transfer-bin.page.scss'],
})
export class ScanPutawayTransferBinPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private toastService: ToastService,
    private loadingController: LoadingController,
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    private router: Router
  ) { }

  ngOnInit() {
  }

  confirmBox(){
    this.router.navigate(['/scan-putaway-transfer-bin']);    
  }

  // confirmBox(){
  //   this.router.navigate(['/scan-putaway-transfer-bin']);    
  // }

  // Delete card
  async continue() {
    const alert = await this.alertController.create({
      cssClass: 'custom-alert',
      header: 'System Alert',
      message: 'Bin has Stock Items. Use it anyway?',
      buttons: [
        {
          text: 'Yes',
          cssClass: 'danger',
          handler: async () => {
            this.result();
            // this.toastService.presentToast('Success', 'Card successfully deleted', 'top', 'success', 2000);
          }
        },
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'cancel',
          handler: async () => {
            this.showAlert();
            // this.toastService.presentToast('Success', 'Card successfully deleted', 'top', 'success', 2000);
          }
        }
      ]
    });

    await alert.present();
  }

  async result(){
    const search = document.getElementById('search');
    
    // if(search.style.display == 'none'){
    //   search.style.display = 'block';
    // } else{
    //   search.style.display = 'none';
    // }  

    // Proceed with loading overlay
    const loading = await this.loadingController.create({
      cssClass: 'default-loading',
      message: '<p>Processing Order</p><span>Please wait...</span>',
      spinner: 'crescent'
    });
    await loading.present();

    // TODO: Add your sign in logic
    // ...

    // Fake timeout
    setTimeout(async () => {
      loading.dismiss();
      this.router.navigate(['/complete-transfer-bin']); 

      // Sign in success
      // await this.router.navigate(['/home2']);
      // search.style.display = 'block';
      
    }, 2000);
    

    // this.router.navigate(['/scan-box-result-lookup']);    
  }

  // modal:any = document.querySelector('ion-modal');

  // dismiss() {
  //   this.modal.dismiss();
  // }

  async testAlert(){
    const alert = document.querySelector('ion-alert');

    alert.buttons = [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Alert canceled');
        },
      },
      {
        text: 'OK',
        role: 'confirm',
        handler: () => {
          console.log('Alert confirmed');
        },
      },
    ];

    alert.addEventListener('ionAlertDidDismiss', (ev) => {
      console.log(`Dismissed with role:`);
    });
    }

    async showAlert() {  
      const alert = await this.alertController.create({  
        header: 'System alert',  
        // subHeader: 'Action Failure!',  
        message: 'No Stock Found or Articles OnHOLD!',  
        buttons: ['OK']  
      });  
      await alert.present();  
      const result = await alert.onDidDismiss();  
      console.log(result);  
    }  
}
