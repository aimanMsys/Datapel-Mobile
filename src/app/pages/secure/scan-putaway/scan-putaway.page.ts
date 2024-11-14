import { Component, OnInit} from '@angular/core';
import { Barcode, BarcodeScanner} from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoadingController, NavController} from '@ionic/angular';
import { TransferService } from 'src/app/services/transfer.service';

@Component({
  selector: 'app-scan-putaway',
  templateUrl: './scan-putaway.page.html',
  styleUrls: ['./scan-putaway.page.scss'],
})
export class ScanPutawayPage implements OnInit {

  isSupported = false;
  barcodes: Barcode[] = [];
  barcode:any="";
  transferParam: any;
  locationBins: any;
  currentDate = new Date();
  formattedDate = this.currentDate.toLocaleDateString('en-CA');

  transferItemList:any[]=[];

  constructor(
    private loadingController: LoadingController,
    private navCtrl: NavController,
    private router: Router,
    private alertController: AlertController,
    private transferService : TransferService
  ) { }

  ngOnInit() {

    this.transferParam = JSON.parse(localStorage.getItem('transferParam'));
    this.transferItemList = JSON.parse(localStorage.getItem('transferItemList'));
    
    console.log("transfer Param =", this.transferParam);
    this.getLocationBins(this.transferParam.destination.LocationCode);


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
    return array.filter(item => item[column].toLowerCase() == value.toLowerCase());
  }

  async checkBarcodeInput() {

    if (this.barcode.startsWith("]E0")) {
      this.barcode = this.barcode.substring(3);
    }

    const result = this.searchByColumnValue(this.locationBins, 'BinName', this.barcode);
    console.log("result =",result);

    console.log('Barcode entered:', this.barcode);
    if (result.length != 0) {

      var paramItem = {
        "Item": this.transferParam?.product.ItemNumber,
        "Quantity": this.transferParam?.scanQty,
        "BRN": this.transferParam?.productArticle.BRN,
        "SrcBin": "",
        "DstBin": ""
      };

      this.transferItemList = this.transferItemList || [];
      this.transferItemList?.push(paramItem);
      console.log("transferItemList =",JSON.stringify(this.transferItemList));
      localStorage.setItem('transferItemList', JSON.stringify(this.transferItemList));

      const alert = await this.alertController.create({
        header: 'Transfer Order',
        message: `#Transfer Lines : `+this.transferItemList.length + '. More to add item lines. Done to complete transfer',
        buttons: [
          {
            text: 'More',
            handler: () => {
              console.log('Back button clicked in the alert.');
              // User clicked the "Back" button in the alert
              this.router.navigate(['/transfer-scanproduct']);
            },
          },
          {
            text: 'Done',
            handler: async () => {
              console.log('Back button clicked in the alert.');

              const loading = await this.loadingController.create({
                cssClass: 'default-loading',
                message: '<p>Processing order</p><span>Please wait...</span>',
                spinner: 'crescent'
              });
              await loading.present();

              var param = {
                "NewDataSet": {
                  "tREMOTETransHeader": {
                    "TransID": "",
                    "TransDate": this.formattedDate,
                    "SrcLocation": this.transferParam.source.LocationCode,
                    "DstLocation": this.transferParam.destination.LocationCode,
                    "Contact": "DECTEC Supplier",
                    "User": "Clarke, Connan",
                    "TransactionType": "TO"
                  },
                  "tREMOTETransLines": this.transferItemList
                }
              };

              this.transferService.createTransaction(param).subscribe({
                next: async (resp) => {

                  console.log("resp =",JSON.stringify(resp));
                  localStorage.setItem('transaction', JSON.stringify(resp));
          
                  loading.dismiss();

                  // User clicked the "Back" button in the alert
                  this.router.navigate(['/transfer-comp']);
          
                }, error: async (error) => {
                  // loading.dismiss();
                  const alert = await this.alertController.create({
                  
                    header: 'System Alert',
                    message: error,
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

              
            },
          },
        ],
        cssClass: 'custom-alert',
      });
  
      await alert.present();


      // console.log('Valid barcode. Showing loading...');
      // const loading = await this.loadingController.create({
      //   cssClass: 'default-loading',
      //   message: '<p>Processing order</p><span>Please wait...</span>',
      //   spinner: 'crescent'
      // });
      // await loading.present();
  
      // setTimeout(() => {
      //   loading.dismiss();
      //   console.log('Loading dismissed. Navigating to the next page...');
      //   // Navigate to the next page (replace '/scan-bin' with the actual route)
      //   // this.router.navigate(['/transfer-comp']);
      // }, 2000); // Change 2000 to the actual time your loading process may take
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
        cssClass: 'custom-alert',
      });
  
      await alert.present();
    }
  }

  async getLocationBins(locationCode:any){

    const loading = await this.loadingController.create({
      cssClass: 'default-loading',
      message: '<p>Loading</p><span>Please wait...</span> ',
      spinner: 'crescent'
    });
    await loading.present();

    this.transferService.getLocationBins(locationCode).subscribe({
      next: async (resp) => {
        this.locationBins = resp.d.results;
        if(this.locationBins.length == 0) {
          const alert = await this.alertController.create({
        
            header: 'System Alert',
            message: 'Destination has 0 BIN',
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

        loading.dismiss();

      }, error: async (error) => {
        loading.dismiss();
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

}
