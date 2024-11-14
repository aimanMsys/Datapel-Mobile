import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController, IonInput, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-enter-qty',
  templateUrl: './enter-qty.page.html',
  styleUrls: ['./enter-qty.page.scss'],
})
export class EnterQtyPage implements OnInit {
  transferParam: any;
  barcode: string;
  isSupported: any;
  @ViewChild('input') input!: IonInput;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController,
  ) { }

  ngOnInit() {
    this.transferParam = JSON.parse(localStorage.getItem('transferParam'));
    console.log("transfer Param =", this.transferParam);

    this.barcode = "";
    // this.listenToKeyboardEvents();

    if (!BarcodeScanner.isGoogleBarcodeScannerModuleAvailable()) {
      BarcodeScanner.installGoogleBarcodeScannerModule();
    }
    BarcodeScanner.installGoogleBarcodeScannerModule();
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });
  }

  ngOnDestroy() {
    // Unsubscribe from back button event when leaving the component
    this.barcode = "";
  }

  ngAfterViewInit() {

    this.input.setFocus();

  }

  // Reset the input value before leaving the component
  ionViewWillLeave() {
    this.barcode = "";
  }

  ionViewDidEnter() {
    this.input.setFocus();
    // this.input2.setFocus();
  }

  next() {
    this.router.navigate(['/trans-scanbatch'])
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

  YesPage(){
    this.transferParam.scanQty = this.barcode;
    console.log("dest =",JSON.stringify(this.transferParam));
    localStorage.setItem('transferParam', JSON.stringify(this.transferParam));
    this.router.navigate(['/scan-putaway']);
  }

  NoPage(){
    this.router.navigate(['/confirm-qty']);
  }
}
