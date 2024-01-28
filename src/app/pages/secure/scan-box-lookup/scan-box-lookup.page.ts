import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController,LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-scan-box-lookup',
  templateUrl: './scan-box-lookup.page.html',
  styleUrls: ['./scan-box-lookup.page.scss'],
})
export class ScanBoxLookupPage implements OnInit {

  isSupported = false;
  barcodes: Barcode[] = [];
  barcode:any="";

  constructor(
    private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) { }

  firstSearch:boolean = true;

  ngOnInit() {
    if(!BarcodeScanner.isGoogleBarcodeScannerModuleAvailable()){
      BarcodeScanner.installGoogleBarcodeScannerModule();
    }
    BarcodeScanner.installGoogleBarcodeScannerModule();
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });
  }

  async result(){

    if (this.barcode == '1234') {
      document.getElementById('inUse').style.display = "none";
      document.getElementById('available').style.display = "block";
    } else {
      document.getElementById('inUse').style.display = "block";
      document.getElementById('available').style.display = "none";
    }

    const search = document.getElementById('search');
    
    // if(search.style.display == 'none'){
    //   search.style.display = 'block';
    // } else{
    //   search.style.display = 'none';
    // }  

    // Proceed with loading overlay
    const loading = await this.loadingController.create({
      cssClass: 'default-loading',
      message: '<p><ion-icon name="search-circle-outline" style="margin-right: 5px;"></ion-icon> Searching</p><span>Please wait...</span>',
      spinner: 'crescent'
    });
    await loading.present();

    // TODO: Add your sign in logic
    // ...

    // Fake timeout
    setTimeout(async () => {

      // Sign in success
      // await this.router.navigate(['/home2']);
      search.style.display = 'block';
      loading.dismiss();
      this.firstSearch = false;
    }, 2000);
    

    // this.router.navigate(['/scan-box-result-lookup']);    
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

  

}
