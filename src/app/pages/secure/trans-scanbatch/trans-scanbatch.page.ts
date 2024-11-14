import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router} from '@angular/router';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController, IonInput, LoadingController } from '@ionic/angular';
import { BinLookupService } from 'src/app/services/bin-lookup.service';
import { TransferService } from 'src/app/services/transfer.service';

@Component({
  selector: 'app-trans-scanbatch',
  templateUrl: './trans-scanbatch.page.html',
  styleUrls: ['./trans-scanbatch.page.scss'],
})
export class TransScanbatchPage implements OnInit,OnDestroy{
  transferParam: any;
  productArticle:any;

  isSupported = false;
  barcodes: Barcode[] = [];
  @ViewChild('input') input!: IonInput;
  barcode: any = "";
  product: any;

  constructor(
    private router: Router,
    private transferService: TransferService,
    private alertController: AlertController,    
    private loadingController: LoadingController,

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


   back(){
    this.router.navigate (['/transfer'])
   } 

   scanLot(){
    this.router.navigate (['/scanlot'])
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

  searchByColumnValue(array: any[], column: string, value: any) {
    console.log(array);
    return array.filter(item => item[column] == value);
  }

  async checkBarcodeInput(){
    
    if (this.barcode.startsWith("]")) {
      this.barcode = this.barcode.substring(3);
    }

    const result = this.searchByColumnValue(this.productArticle, 'BRN', this.barcode);
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
  
      // this.transferParam.BRN = this.barcode;
      this.transferParam.productArticle = result[0];
      console.log("dest =",JSON.stringify(this.transferParam));
      localStorage.setItem('transferParam', JSON.stringify(this.transferParam));

      setTimeout(() => {
        loading.dismiss();
        console.log('Loading dismissed. Navigating to the next page...');
        this.scanLot();
      }, 2000);
    }else{
      console.log('Invalid barcode. Showing alert...');
      const alert = await this.alertController.create({
        header: 'System Alert',
        message: 'BRN not found!',
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

}
