import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController, IonInput, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StockLookupService } from 'src/app/services/stock-lookup.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Plugins } from '@capacitor/core';
import { Keyboard } from '@capacitor/keyboard';





// https://ionic.io/blog/how-to-build-an-ionic-barcode-scanner-with-capacitor
@Component({
  selector: 'app-stock-lookup',
  templateUrl: './stock-lookup.page.html',
  styleUrls: ['./stock-lookup.page.scss'],
})
export class StockLookupPage implements OnInit,OnDestroy {

  isSupported = false;
  barcodes: Barcode[] = [];
  barcode: any = "";
  loading: boolean = false;
  product: any;
  isContentLoaded: boolean = false;
  @ViewChild('input') input!: IonInput;
  @ViewChild('input2') input2!: IonInput;
  private keyboardSub: Subscription;
  input1: any = "";
  hiddenInput:any="";


  constructor(
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private stockLookupService: StockLookupService,
    private authService: AuthService
  ) { 
    
  }

  ngOnInit() {
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
  focusInput() {
    // Focus the input field for physical keyboard input
    const hiddenInput = document.getElementById('hiddenInput') as HTMLInputElement;

    // Check if the input is currently read-only
    if (this.input.readonly) {
      this.input.setFocus();
      // If input is read-only, make it editable and show the virtual keyboard
      this.input.readonly = false;
      Keyboard.show();  // Show the virtual keyboard
    } else {
      this.input2.setFocus();
      // If input is editable, make it read-only and hide the virtual keyboard
      hiddenInput.addEventListener('focus', () => {
        Keyboard.hide(); // Hide the keyboard
      });
      this.input.readonly = true;
      Keyboard.hide();  // Hide the virtual keyboard
    }
  }

  transferValue(){
    // console.log(this.input.value);
    this.input.value = this.input2.value;
  }


  handleKeyboardInput(event: any) {
    const key = event.key;
    const val = event.target.value;

    // Ensure input1 is initialized and not null
    if (this.input1 === undefined || this.input1 === null) {
      this.input1 = '';
    }

    // Regex to allow letters, numbers, and symbols
    const regex = /^[a-zA-Z0-9@#\$%\^&\*\(\)\-\+=\[\]\{\};:'",.<>\/?\\|`~! ]*$/;

    // List of allowed special keys for physical keyboard
    const allowedSpecialKeys = [
      'Enter', 'Tab', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Delete', 'Shift', 'Control', 'Alt', 'CapsLock'
    ];

    // Handle special keys for physical keyboards (like Enter, Tab, etc.)
    if (key && allowedSpecialKeys.includes(key)) {
      return; // Exit early for special keys
    }

    // Handle Backspace for both physical and virtual keyboards
    if (key === 'Backspace') {
      if (this.input1.length > 0) {
        this.input1 = this.input1.slice(0, -1);  // Remove last character
      }
      this.input.value = this.input1;  // Update the input field value
      return;
    }
    console.log(val);


    if (this.input.readonly) {
      // Use the actual value from the input field for virtual keyboard input and deletions
      if (val !== undefined && val !== null) {
        // Only update input1 if the value matches the regex
        if (regex.test(val)) {
          this.input1 += key;
          this.input1 = this.input1.replace(/[^a-zA-Z0-9@#\$%\^&\*\(\)\-\+=\[\]\{\};:'",.<>\/?\\|`~! ]/g, '');
          this.input.value = this.input1; // Update actual input field
        }
      } else {
        // Prevent invalid input
        event.preventDefault();
      }
    } else {
      // Use the actual value from the input field for virtual keyboard input and deletions
      if (val !== undefined && val !== null) {
        // Only update input1 if the value matches the regex
        if (regex.test(val)) {
          this.input1 = val.replace(/[^a-zA-Z0-9@#\$%\^&\*\(\)\-\+=\[\]\{\};:'",.<>\/?\\|`~! ]/g, '');  // Clean invalid characters
          this.input.value = this.input1;  // Update the input field value
        }
      } else {
        // Prevent invalid input
        event.preventDefault();
      }
    }

    console.log(this.input1);
  }




  preventInput(event: Event) {
    event.preventDefault(); // Prevent user-initiated input directly in the field
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

  stockDetail() {
    this.router.navigate(['/stock-detail']);
  }

  home() {
    this.router.navigate(['/home2'])
  }

  signin() {
    this.router.navigate(['/signin'])
  }
  async signout() {
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

  async search(): Promise<void> {
    // if (this.barcode !== '0304') {
    //   await this.presentAlert2('System Alert ', 'The item barcode or number was not found.');
    //   return; // Exit the function early if the barcode is incorrect
    // }

    const loading = await this.loadingController.create({
      cssClass: 'default-loading',
      message: '<p>Searching for item </p><span>Please wait...</span> ',
      spinner: 'crescent'
    });
    await loading.present();

    setTimeout(async () => {
      await this.router.navigate(['/stock-detail', 1]);
      loading.dismiss();
    }, 2000);
  }

  async search2(): Promise<void> {

    const loading = await this.loadingController.create({
      cssClass: 'default-loading',
      message: '<p>Searching for item </p><span>Please wait...</span> ',
      spinner: 'crescent'
    });
    await loading.present();

    this.stockLookupService.product(this.barcode).subscribe({
      next: (resp) => {

        this.router.navigate(['/stock-detail', this.barcode]);
        loading.dismiss();
        // setTimeout(async () => {
        //   
        //   loading.dismiss();
        // }, 2000);


      }, error: (error) => {
        this.loading = false;
        loading.dismiss();
        this.presentAlert2('System Alert ', 'The item barcode or number was not found.');
        return; // Exit the function early if the barcode is incorrect

      }
    })



  }

  async scanBarcode(): Promise<void> {

    const loading = await this.loadingController.create({
      cssClass: 'default-loading',
      message: '<p>Searching for item </p><span>Please wait...</span> ',
      spinner: 'crescent'
    });
    await loading.present();

    if(this.barcode.startsWith("]E0")){
      this.barcode = this.barcode.substring(3);
    }
    this.stockLookupService.getProductUid(this.barcode).subscribe({
      next: (resp) => {
        
        if (resp.d.results != null && resp.d.results.length != 0) {
          this.product = resp.d.results[0];
          this.stockLookupService.product(this.product.ItemUid).subscribe({
            next: (response) => {
              this.barcode = "";
              loading.dismiss();
              this.router.navigate(['/stock-detail', response.ProductUid, ""]);


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
        this.loading = false;
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
            },150);
            
          }
        }
      ]
    });
    await alert.present();
  }



}



