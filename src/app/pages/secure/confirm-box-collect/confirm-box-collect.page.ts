import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController,LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-confirm-box-collect',
  templateUrl: './confirm-box-collect.page.html',
  styleUrls: ['./confirm-box-collect.page.scss'],
})
export class ConfirmBoxCollectPage implements OnInit {

  isSupported = false;
  barcodes: Barcode[] = [];
  barcode:any="";

  constructor(
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    if(!BarcodeScanner.isGoogleBarcodeScannerModuleAvailable()){
      BarcodeScanner.installGoogleBarcodeScannerModule();
    }
    BarcodeScanner.installGoogleBarcodeScannerModule();
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });
  }

  scanNext(){
    this.router.navigate(['/scan-next-box-collect']);    
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
