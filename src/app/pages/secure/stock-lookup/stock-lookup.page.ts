import { Component, OnInit } from '@angular/core';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';
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

  constructor( private router: Router,private alertController: AlertController) {}

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


}
