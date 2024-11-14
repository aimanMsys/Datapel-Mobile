import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonInput } from '@ionic/angular'; // Import AlertController
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { LoadingController, NavController } from '@ionic/angular';
import { TransferService } from 'src/app/services/transfer.service';

@Component({
  selector: 'app-trans-scanpickbin',
  templateUrl: './trans-scanpickbin.page.html',
  styleUrls: ['./trans-scanpickbin.page.scss'],
})
export class TransScanpickbinPage implements OnInit {
  transferParam:any;
  data:any;
  locationBins:any=[];
  pickBin:any;
  isSupported = false;
  barcodes: Barcode[] = [];
  @ViewChild('input') input!: IonInput;
  barcode: any = "";
  
  constructor(
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private transferService: TransferService,
  ) {}

  ngOnInit() {
    this.transferParam = JSON.parse(localStorage.getItem('transferParam'));
    console.log("transfer Param =",this.transferParam);

    this.getLocationBins(this.transferParam.source.LocationCode);
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

  async nextPage() {
    // Validate barcode
    if (!this.barcode || !this.isValidBarcode(this.barcode)) {
      const alert = await this.alertController.create({
        header: 'ACTION FAILURE!',
        message: 'Scanned Bin Is Unknown',
        buttons: ['Continue'],
        cssClass: 'error-alert'
      });
      await alert.present();
      return;
    }

    console.log('Navigating to /transfer');
    this.router.navigate(['/transfer-scanproduct']);
  }

  isValidBarcode(barcode: string) {
    // Define the correct values (add more if needed)
    const validValues = ['0304', '1234', '5678'];

    return validValues.includes(barcode);
  }

  
  binButtonsEnabled: boolean[] = [true, true, true];
  continueButtonEnabled = false;

  selectedBinIndex: number = null; // Property to track selected bin

  toggleButton(index: number) {
    this.binButtonsEnabled = [true, true, true]; // Enable all buttons

    // Disable the clicked button
    this.binButtonsEnabled[index] = false;

    this.continueButtonEnabled = true;

    this.selectedBinIndex = index; // Set selected bin index
  }

  selectPickBin(pickBin){
    this.pickBin = pickBin;
    this.binButtonsEnabled = [true, true, true]; // Enable all buttons

    // Disable the clicked button
    this.binButtonsEnabled[pickBin?.LocationBinId] = false;

    this.continueButtonEnabled = true;

    this.selectedBinIndex = pickBin?.LocationBinId; // Set selected bin index
    this.barcode = pickBin?.BinName;
  }

  searchByColumnValue(array: any[], column: string, value: any) {
    return array.filter(item => item[column].toLowerCase() === value.toLowerCase());
  }

  async checkBarcodeInput() {
    console.log('Barcode entered:', this.barcode);
    if (this.barcode.startsWith("]")) {
      this.barcode = this.barcode.substring(3);
    }
    console.log("this.barcode =",this.barcode);
    var result = this.searchByColumnValue(this.locationBins, 'BinName', this.barcode);

    console.log("result =",result);

    if ((result.length != 0 && this.barcode.length != 0)|| this.barcode.length == 0 ) {
      console.log('Valid barcode. Showing loading...');
      const loading = await this.loadingController.create({
        cssClass: 'default-loading',
        message: '<p>Searching</p><span>Please wait...</span>',
        spinner: 'crescent'
      });
      await loading.present();
      
      if(this.barcode.length == 0){
        this.transferParam.pickBin = "";
      } else {
        this.transferParam.pickBin = result[0];
      }
      
      console.log("dest =",JSON.stringify(this.transferParam));
      localStorage.setItem('transferParam', JSON.stringify(this.transferParam));

      setTimeout(() => {
        loading.dismiss();
        console.log('Loading dismissed. Navigating to the next page...');
        this.router.navigate(['/transfer-scanproduct']);
      }, 2000);
    } else if(result.length == 0){
      console.log('Invalid barcode. Showing alert...');
      const alert = await this.alertController.create({
        header: 'System Alert',
        message: 'Scanned Bin is unknown!',
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

  async getLocationBins(locationCode:any){

    const loading = await this.loadingController.create({
      cssClass: 'default-loading',
      message: '<p>Loading</p><span>Please wait...</span> ',
      spinner: 'crescent'
    });
    await loading.present();

    this.transferService.getLocationBins(locationCode).subscribe({
      next: (resp) => {
        this.locationBins = resp.d.results;
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
