import { Component, OnInit } from '@angular/core';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController,LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StockLookupService } from 'src/app/services/stock-lookup.service';





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
  loading:boolean=false;
 

  constructor( 
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private stockLookupService: StockLookupService,
  ) {}

  ngOnInit() {
    if(!BarcodeScanner.isGoogleBarcodeScannerModuleAvailable()){
      BarcodeScanner.installGoogleBarcodeScannerModule();
    }
    BarcodeScanner.installGoogleBarcodeScannerModule();
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });

    // this.test1();
    // this.test2();
    // this.test3();
    // this.test4();
    // this.test5();
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

    this.search2();
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
      message: '<p>Searching for item </p><span>Please wait...</span> ',
      spinner: 'crescent'
    });
    await loading.present();
  
    setTimeout(async () => {
      await this.router.navigate(['/stock-detail',1]);
      loading.dismiss();
    }, 2000);
  }

  async search2(): Promise<void> {

    const loading = await this.loadingController.create({
      cssClass: 'default-loading',
      message: '<p>Searching for item </p><span>Please wait...</span> ',
      spinner: 'crescent'
    });
    await loading.present();

    this.stockLookupService.product(this.barcode).subscribe({
      next: (resp) => {
        
        this.router.navigate(['/stock-detail',this.barcode]);
        loading.dismiss();
        // setTimeout(async () => {
        //   
        //   loading.dismiss();
        // }, 2000);
        

      }, error: (error) => {
        this.loading = false;
          loading.dismiss();
          this.presentAlert2('System Alert ', 'The item barcode or number was not found.');
          return; // Exit the function early if the barcode is incorrect
        
      }
    })

    
  
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
  


