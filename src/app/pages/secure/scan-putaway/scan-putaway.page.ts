import { Component, OnInit} from '@angular/core';
import { Barcode} from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoadingController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-scan-putaway',
  templateUrl: './scan-putaway.page.html',
  styleUrls: ['./scan-putaway.page.scss'],
})
export class ScanPutawayPage implements OnInit {

  isSupported = false;
  barcodes: Barcode[] = [];
  barcode:any="";

  constructor(
    private loadingController: LoadingController,
    private navCtrl: NavController,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async checkBarcodeInput() {
    console.log('Barcode entered:', this.barcode);
    if (this.barcode === '2200') {
      console.log('Valid barcode. Showing loading...');
      const loading = await this.loadingController.create({
        cssClass: 'default-loading',
        message: '<p><ion-icon name="search-circle-outline" style="margin-right: 5px;"></ion-icon> Searching</p><span>Please wait...</span>',
        spinner: 'crescent'
      });
      await loading.present();
  
      setTimeout(() => {
        loading.dismiss();
        console.log('Loading dismissed. Navigating to the next page...');
        // Navigate to the next page (replace '/scan-bin' with the actual route)
        this.router.navigate(['/transfer-comp']);
      }, 2000); // Change 2000 to the actual time your loading process may take
    } else {
      console.log('Invalid barcode. Showing alert...');
      // Show an alert with a "Back" button
      const alert = await this.alertController.create({
        header: 'System Alert',
        message: 'Bin not found!',
        buttons: [
          {
            text: 'Back',
            handler: () => {
              console.log('Back button clicked in the alert.');
              // User clicked the "Back" button in the alert
            },
          },
        ],
        cssClass: 'light-red-alert',
      });
  
      await alert.present();
    }
  }

}
