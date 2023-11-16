import { Component, OnInit } from '@angular/core';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController,LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';





// https://ionic.io/blog/how-to-build-an-ionic-barcode-scanner-with-capacitor
@Component({
  selector: 'app-stock-lookup',
  templateUrl: './stock-lookup.page.html',
  styleUrls: ['./stock-lookup.page.scss'],
})
export class StockLookupPage implements OnInit {

  isSupported = false;
  barcodes: Barcode[] = [];
  barcode:any="";
 

  constructor( 
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController) {}

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

  stockDetail(){
    this.router.navigate(['/stock-detail']);
  }

  home(){
    this.router.navigate(['/home2'])
  }

  signin(){
    this.router.navigate(['/signin'])
  }
  async signout(){
    const loading = await this.loadingController.create({
      cssClass: 'default-loading',
      message: '<p>Signing out...</p><span>See You Again.</span>',
      spinner: 'crescent'
    });
    await loading.present();

    // TODO: Add your sign in logic
    // ...

    // Fake timeout
    setTimeout(async () => {

      // Sign in success
      await this.router.navigate(['/signin']);
      loading.dismiss();
    }, 4000);
  }

  async search(): Promise<void> {
    if (this.barcode !== '0304') {
      await this.presentAlert2('System Alert ', 'The item barcode or number was not found.');
      return; // Exit the function early if the barcode is incorrect
    }
  
    const loading = await this.loadingController.create({
      cssClass: 'default-loading',
      message: '<p><ion-icon name="search-circle-outline"></ion-icon> Searching for item </p><span>Please wait...</span> ',
      spinner: 'crescent'
    });
    await loading.present();
  
    setTimeout(async () => {
      await this.router.navigate(['/stock-detail']);
      loading.dismiss();
    }, 2000);
  }
  
  async presentAlert2(header: string, message: string) {
    const alert = await this.alertController.create({
      cssClass: 'custom-alert', // Apply the custom CSS class
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
  


