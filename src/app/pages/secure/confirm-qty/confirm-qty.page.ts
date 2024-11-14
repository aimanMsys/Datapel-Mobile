import { Component, OnInit } from '@angular/core';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoadingController, NavController} from '@ionic/angular';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-confirm-qty',
  templateUrl: './confirm-qty.page.html',
  styleUrls: ['./confirm-qty.page.scss'],
})
export class ConfirmQtyPage implements OnInit {

  isSupported = false;
  barcodes: Barcode[] = [];
  barcode:any="";
  transferParam: any;
  ctn:number=1;


  constructor(
    private loadingController: LoadingController,
    private navCtrl: NavController,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {

    this.transferParam = JSON.parse(localStorage.getItem('transferParam'));
    console.log("transfer Param =", this.transferParam);
    
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });
  }

  addCTN(){
    this.ctn=this.ctn+1;
  }

  substractCTN(){
    if(this.ctn > 1){
      this.ctn=this.ctn-1;
    }
    
  }

  

  async checkBarcodeInput() {
    if (this.barcode.startsWith("]E0")) {
      this.barcode = this.barcode.substring(3);
    }
    console.log('Barcode entered:', this.barcode);
    if (this.barcode) {
      console.log('Valid barcode. Showing loading...');
      const loading = await this.loadingController.create({
        cssClass: 'default-loading',
        message: 'Searching</p><span>Please wait...</span>',
        spinner: 'crescent'
      });
      await loading.present();

      this.transferParam.scanQty = this.barcode;
      console.log("dest =",JSON.stringify(this.transferParam));
      localStorage.setItem('transferParam', JSON.stringify(this.transferParam));
  
      setTimeout(() => {
        loading.dismiss();
        console.log('Loading dismissed. Navigating to the next page...');
        // Navigate to the next page (replace '/scan-bin' with the actual route)
        this.router.navigate(['/scan-putaway']);
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
