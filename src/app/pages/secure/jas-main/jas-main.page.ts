import { Component, OnInit } from '@angular/core';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LoadingController, NavController} from '@ionic/angular';
import { BinLookupService } from 'src/app/services/bin-lookup.service';



@Component({
  selector: 'app-jas-main',
  templateUrl: './jas-main.page.html',
  styleUrls: ['./jas-main.page.scss'],
})
export class JasMainPage implements OnInit {
  loading:boolean=false;
  isSupported = false;
  barcodes: Barcode[] = [];
  barcode:any="";
  binDetail:any;
  productArticle:any[] = [];
  navigationExtras: NavigationExtras = {
    queryParams: {
        // "bin": JSON.stringify(this.users[i])
    }
  };

  constructor( 
    private loadingController: LoadingController,
    private navCtrl: NavController,
    private router: Router,
    private route: ActivatedRoute,
    private binLookupService: BinLookupService,
    private alertController: AlertController) {}
    
    async logout() {
      const loading = await this.loadingController.create({
        message: 'Logging Out...',
      });
      await loading.present();
  
  
      setTimeout(() => {
        loading.dismiss(); 
        this.router.navigate(['/signin']);
      }, 2000); 
    }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.binDetail = JSON.parse(params["binDetail"]);
    });

    console.log("binDetail =",this.binDetail);

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
    this.getProductArticles();
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
      cssClass: 'custom-alert', 
    });
    await alert.present();
  }

 

  async checkBarcodeInput() {
    console.log('Barcode entered:', this.barcode);

    this.getProductArticles();


    if (this.barcode === '1234') {
      console.log('Valid barcode. Showing loading...');
      const loading = await this.loadingController.create({
        cssClass: 'default-loading',
        message: '<p>Searching</p><span>Please wait...</span>',
        spinner: 'crescent'
      });
      await loading.present();
  
      setTimeout(() => {
        loading.dismiss();
        console.log('Loading dismissed. Navigating to the next page...');
        this.router.navigate(['/scan-bin']);
      }, 2000); 
    } else {
      console.log('Invalid barcode. Showing alert...');
      const alert = await this.alertController.create({
        
        header: 'System Alert',
        message: 'Bin not found!',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              console.log('Back button clicked in the alert.');
            },
          },
        ],
        cssClass: 'custom-alert', 
      });
  
      await alert.present();
    }
  }

  async getProductArticles(){
    console.log('Valid barcode. Showing loading...');
      const loading = await this.loadingController.create({
        cssClass: 'default-loading',
        message: '<p>Searching</p><span>Please wait...</span>',
        spinner: 'crescent'
      });
      await loading.present();

    var param = {
      code: this.barcode,
      location:this.binDetail.location
    };

    this.binLookupService.testProductArticles(param).subscribe({
      next: async (resp) => {
        loading.dismiss();
        
            this.productArticle = resp.d.results;

            if(this.productArticle.length != 0) {
                // setTimeout(() => {
                // loading.dismiss();
                // console.log('Loading dismissed. Navigating to the next page...');
                this.binDetail = {
                  location:this.binDetail.location,
                  code: this.barcode,
                };
            
                this.navigationExtras = {
                  queryParams: {
                    "binDetail":JSON.stringify(this.binDetail)
                      // "bin": JSON.stringify(this.users[i])
                  }
                };
                this.router.navigate(['/scan-bin'], this.navigationExtras);
               // }, 2000); 
            } else {
              const alert = await this.alertController.create({
            
                header: 'System Alert',
                message: 'Bin not found!',
                buttons: [
                  {
                    text: 'OK',
                    handler: () => {
                      console.log('Back button clicked in the alert.');
                    },
                  },
                ],
                cssClass: 'custom-alert', 
              });
          
              await alert.present();
            }
            
          

      }, error: async (error) => {
        this.loading = false;
        console.log('Invalid barcode. Showing alert...');
          const alert = await this.alertController.create({
            
            header: 'System Alert',
            message: 'Bin not found!',
            buttons: [
              {
                text: 'OK',
                handler: () => {
                  console.log('Back button clicked in the alert.');
                },
              },
            ],
            cssClass: 'custom-alert', 
          });
      
          await alert.present();
      }
    })
  }

  async back(){
    this.router.navigate(['/bin-lookup'], this.navigationExtras);
  }

  
}
