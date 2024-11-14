import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController, IonInput, LoadingController } from '@ionic/angular';
import { StockLookupService } from 'src/app/services/stock-lookup.service';
import { TransferService } from 'src/app/services/transfer.service';

@Component({
  selector: 'app-transfer-scanproduct',
  templateUrl: './transfer-scanproduct.page.html',
  styleUrls: ['./transfer-scanproduct.page.scss'],
})
export class TransferScanproductPage implements OnInit,OnDestroy{
  transferParam: any;

  isSupported = false;
  barcodes: Barcode[] = [];
  @ViewChild('input') input!: IonInput;
  barcode: any = "";
  product: any;
  productArticle: any;

  constructor(private router: Router,

    private alertController: AlertController,
    private loadingController: LoadingController,
    private stockLookupService: StockLookupService,
    private transferService: TransferService,
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


  async scan(): Promise<void> {
    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentAlert();
      return;
    }
    const { barcodes } = await BarcodeScanner.scan();
    this.barcodes.push(...barcodes);
    this.barcode = barcodes[0].rawValue;

    this.scanBarcode();
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

    if (this.barcode.startsWith("]")) {
      this.barcode = this.barcode.substring(3);
    }
    this.stockLookupService.getProductUid(this.barcode).subscribe({
      next: (resp) => {

        if (resp.d.results != null && resp.d.results.length != 0) {
          this.product = resp.d.results[0];
          this.stockLookupService.product(this.product.ItemUid).subscribe({
            next: (response) => {
              
              this.barcode = "";
              this.transferParam.product = response;
              console.log("dest =",JSON.stringify(this.transferParam));
              localStorage.setItem('transferParam', JSON.stringify(this.transferParam));

              this.getProductArticles(response,loading);


            }, error: (error) => {
              this.barcode = "";
              loading.dismiss();
              this.presentAlert2('System Alert ', 'The item barcode or number was not found.');
              this.input.setFocus();
              return; // Exit the function early if the barcode is incorrect

            }
          })

        } else {
          this.barcode = "";
          loading.dismiss();
          this.presentAlert2('System Alert ', 'The item barcode or number was not found.');
          this.input.setFocus();
          return; // Exit the function early if the barcode is incorrect
        }



      }, error: (error) => {
        this.barcode = "";
        loading.dismiss();
        this.presentAlert2('System Alert ', 'The item barcode or number was not found.');
        this.input.setFocus();
        return; // Exit the function early if the barcode is incorrect

      }
    })

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

  getProductArticles(response,loading){

    var param = {
      code: this.transferParam.pickBin ? this.transferParam.pickBin.BinName : "",
      location:this.transferParam.source.LocationCode,
      productUid:this.transferParam.product.ProductUid
    };

    this.transferService.getProductArticlesWithProductUid(param).subscribe({
      next: (resp) => {
        
        this.productArticle = resp.d.results[0];

        loading.dismiss();

        if(response?.IsBatchTracked){
          if(this.productArticle ){
            this.router.navigate(['/trans-scanbatch']);
          } else {
            this.presentAlert2('System Alert ', 'The item not available in ' +  this.transferParam.pickBin.BinName  + ' BIN.');
          this.input.setFocus();
          }
          
          
        } else {
          this.router.navigate(['/scanlot']);
        }

      }, error: (error) => {
        this.productArticle = null;
      }
    })
  }

}
