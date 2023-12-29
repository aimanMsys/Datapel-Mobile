import { Component, OnInit } from '@angular/core';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoadingController, NavController} from '@ionic/angular';




@Component({
  selector: 'app-scanlot',
  templateUrl: './scanlot.page.html',
  styleUrls: ['./scanlot.page.scss'],
})
export class ScanlotPage implements OnInit {

  isSupported = false;
  barcodes: Barcode[] = [];
  barcode:any="";

  constructor(
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });
  }  
  async scan(): Promise<void> {
    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentAlert();
      return;
    }
    const { barcodes } = await BarcodeScanner.scan();
    this.barcodes.push(...barcodes);
    this.barcode = barcodes[0].rawValue;
  }

  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permission denied',
      message: 'Please grant camera permission to use the barcode scanner.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async checkBarcodeInput(){
    console.log('Barcode entered:', this.barcode);
    if(this.barcode === '2200'){
      console.log('Valid barcode. Showing loading...');
      const loading =  await this.loadingController.create({
        cssClass: 'default-loading',
        message: '<p><ion-icon name="search-circle-outline" style="margin-right: 5px;"></ion-icon> Searching</p><span>Please wait...</span>',
        spinner: 'crescent'
      });
      await loading.present();

      setTimeout(() => {
        loading.dismiss();
        console.log('Loading dismissed. Navigating to the next page...');
        this.router.navigate(['/enter-qty']);
      }, 2000);
    }else{
      console.log('Invalid barcode. Showing alert...');
      const alert = await this.alertController.create({
        header: 'System Alert',
        message: 'Bin not found!',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              console.log('Back button clicked in the alert.');
            }
          }
        ],
        cssClass: 'light-red-alert',
      });

      await alert.present();
    }
  }

}
