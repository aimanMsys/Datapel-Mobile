import { Component, OnInit, ViewChild } from '@angular/core';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController, IonInput } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoadingController, NavController} from '@ionic/angular';
import { TransferService } from 'src/app/services/transfer.service';




@Component({
  selector: 'app-scanlot',
  templateUrl: './scanlot.page.html',
  styleUrls: ['./scanlot.page.scss'],
})
export class ScanlotPage implements OnInit {

  isSupported = false;
  barcodes: Barcode[] = [];
  barcode:any="";
  transferParam: any;
  @ViewChild('input') input!: IonInput;
  productArticle: any;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private navCtrl: NavController,
    private transferService : TransferService
  ) { }

  
  ngOnInit() {
    this.transferParam = JSON.parse(localStorage.getItem('transferParam'));
    console.log("transfer Param =", this.transferParam);

    this.getProductArticles();

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

  searchByColumnValue(array: any[], column: string, value: any) {
    console.log(array);
    return array.filter(item => item[column] == value);
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
    this.checkBarcodeInput(); 

  }

  async checkBarcodeInput(){
    
    if (this.barcode.startsWith("]E0")) {
      this.barcode = this.barcode.substring(3);
    }

    const result = this.searchByColumnValue(this.productArticle, 'LotNumber', this.barcode);
    console.log("result =",result);


    console.log('Barcode entered:', this.barcode);
    if(result.length != 0){
      console.log('Valid barcode. Showing loading...');
      const loading =  await this.loadingController.create({
        cssClass: 'default-loading',
        message: '<p>Processing Order...</p><span>Please wait...</span>',
        spinner: 'crescent',
      });
      await loading.present();
  
      this.transferParam.scannedLot = this.barcode;
      this.transferParam.productArticle = result[0];
      console.log("dest =",JSON.stringify(this.transferParam));
      localStorage.setItem('transferParam', JSON.stringify(this.transferParam));

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
        cssClass: 'custom-alert',
      });

      await alert.present();
    }
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

  async scanBarcode(): Promise<void> {

    const loading = await this.loadingController.create({
      cssClass: 'default-loading',
      message: '<p>Searching for item </p><span>Please wait...</span> ',
      spinner: 'crescent'
    });
    await loading.present();

    if (this.barcode.startsWith("]E0")) {
      this.barcode = this.barcode.substring(3);
    }

    this.transferParam.scannedLot = this.barcode;
    console.log("dest =",JSON.stringify(this.transferParam));
    localStorage.setItem('transferParam', JSON.stringify(this.transferParam));

    this.router.navigate(['/scanlot']);

    // this.stockLookupService.getProductUid(this.barcode).subscribe({
    //   next: (resp) => {

    //     if (resp.d.results != null && resp.d.results.length != 0) {
    //       this.product = resp.d.results[0];
    //       this.stockLookupService.product(this.product.ItemUid).subscribe({
    //         next: (response) => {
              
    //           this.barcode = "";
    //           this.transferParam.product = response;
    //           console.log("dest =",JSON.stringify(this.transferParam));
    //           localStorage.setItem('transferParam', JSON.stringify(this.transferParam));

    //           loading.dismiss();

    //           if(response?.IsBatchTracked){
    //             this.router.navigate(['/trans-scanbatch']);
    //           } else {
    //             this.router.navigate(['/scanlot']);
    //           }


    //         }, error: (error) => {
    //           this.barcode = "";
    //           loading.dismiss();
    //           this.presentAlert2('System Alert ', 'The item barcode or number was not found.');
    //           this.input.setFocus();
    //           return; // Exit the function early if the barcode is incorrect

    //         }
    //       })

    //     } else {
    //       this.barcode = "";
    //       loading.dismiss();
    //       this.presentAlert2('System Alert ', 'The item barcode or number was not found.');
    //       this.input.setFocus();
    //       return; // Exit the function early if the barcode is incorrect
    //     }



    //   }, error: (error) => {
    //     this.barcode = "";
    //     loading.dismiss();
    //     this.presentAlert2('System Alert ', 'The item barcode or number was not found.');
    //     this.input.setFocus();
    //     return; // Exit the function early if the barcode is incorrect

    //   }
    // })

  }

  async presentAlert2(header: string, message: string) {
    const alert = await this.alertController.create({
      cssClass: 'custom-alert', // Apply the custom CSS class
      header: header,
      message: message,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            setTimeout(() => {
              this.input.value = "";
              this.input.setFocus();
            }, 300);

          }
        }
      ]
    });
    await alert.present();
  }

  getProductArticles(){

    var param = {
      code: this.transferParam.pickBin ? this.transferParam.pickBin.BinName : "",
      location:this.transferParam.source.LocationCode,
      productUid:this.transferParam.product.ProductUid
    };

    this.transferService.getProductArticlesWithProductUid(param).subscribe({
      next: (resp) => {
        
        this.productArticle = resp.d.results;

      }, error: (error) => {
        
      }
    })
  }

}
