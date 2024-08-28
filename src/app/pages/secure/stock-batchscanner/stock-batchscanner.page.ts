import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import {AlertController, LoadingController } from '@ionic/angular';
import { StockLookupService } from 'src/app/services/stock-lookup.service';



@Component({
  selector: 'app-stock-batchscanner',
  templateUrl: './stock-batchscanner.page.html',
  styleUrls: ['./stock-batchscanner.page.scss'],
})
export class StockBatchscannerPage implements OnInit {
  id:any;
  loading:boolean=false;
  data:any;
  isSupported = false;
  barcodes: Barcode[] = [];
  barcode:any="";
  tqoh:number=0;

  constructor(
    private router: Router,
    private loadingController: LoadingController,
    private route: ActivatedRoute,
    private stockLookupService: StockLookupService,
    private alertController: AlertController,
    
  ) { }

  ngOnInit() {

    if(!BarcodeScanner.isGoogleBarcodeScannerModuleAvailable()){
      BarcodeScanner.installGoogleBarcodeScannerModule();
    }
    BarcodeScanner.installGoogleBarcodeScannerModule();
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });
    
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id); // Now you have access to the ID parameter
    });
    this.search();
  }

  async scan(): Promise<void> {
    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentAlert2();
      return;
    }
    const { barcodes } = await BarcodeScanner.scan();
    this.barcodes.push(...barcodes);
    this.barcode = barcodes[0].rawValue;

    this.batchScanner();
  }

  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  next(){
    this.router.navigate(['/stock-moredetails',this.id])
  }
  back(){
    this.router.navigate(['/stock-detail',this.id])
  }

  stockmore(){
    this.router.navigate(['/stock-moredetails',this.id])
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

  search(){
    this.loading = true;
  
      this.stockLookupService.product(this.id).subscribe({
        next: (resp) => {
          this.loading = false;
   
          this.data = resp;
          this.data.Articles.forEach(ele => {
            this.tqoh += ele.TQOH;
          });
  
          // setTimeout(async () => {
            // this.router.navigate(['/stock-batchscanner',this.id]);
          //   loading.dismiss();
          // }, 2000);
          
  
        }, error: (error) => {
          this.loading = false;
          this.presentAlert(error.statusMessage, "error")
          this.loading = false;
        }
      })
    }

    async batchScanner(){
      const loading = await this.loadingController.create({
        cssClass: 'default-loading',
        message: '<p>Searching</p><span>Please wait...</span>',
        spinner: 'crescent'
      });
      await loading.present();
    
        this.stockLookupService.getInventoryList(this.barcode,this.data.ProductUid).subscribe({
          next: (resp) => {
            this.loading = false;
            loading.dismiss();            
     
            // if(resp.d.results.length > 1){
            //   this.presentAlert("System Alert", "Multiple inventories exist");
            // } else 
            if(resp.d.results.length == 0){
              this.presentAlert("System Alert", "Inventory does not exists");
            } else {

              this.data = resp.d.results[0];

              this.stockLookupService.product(this.data.ProductUid).subscribe({
                next: (resp) => {
                  this.loading = false;
           
                  this.data = resp;
                  this.router.navigate(['/stock-detail',this.data.ProductUid,this.barcode])
                  
          
                }, error: (error) => {
                  loading.dismiss(); 
                  this.presentAlert(error.statusMessage, "error");
                }
              })
              
            }
                
          }, error: (error) => {
            loading.dismiss(); 
            this.presentAlert(error.statusMessage, "error")
          }
        })
      }
  
    async presentAlert(header: string, message: string) {
      const alert = await this.alertController.create({
        cssClass: 'custom-alert', // Apply the custom CSS class
        header: header,
        message: message,
        buttons: ['OK']
      });
      await alert.present();
    }



    async presentAlert2(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permission denied',
      message: 'Please grant camera permission to use the barcode scanner.',
      buttons: ['OK'],
    });
    await alert.present();
  }
  
}


