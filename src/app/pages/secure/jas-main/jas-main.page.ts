import { Component, OnInit, ViewChild } from '@angular/core';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController, IonInput } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { BinLookupService } from 'src/app/services/bin-lookup.service';
import { Keyboard } from '@capacitor/keyboard';



@Component({
  selector: 'app-jas-main',
  templateUrl: './jas-main.page.html',
  styleUrls: ['./jas-main.page.scss'],
})
export class JasMainPage implements OnInit {
  loading: boolean = false;
  isSupported = false;
  barcodes: Barcode[] = [];
  barcode: any = "";
  input1: any = "";
  binDetail: any;
  productArticle: any[] = [];
  navigationExtras: NavigationExtras = {
    queryParams: {
      // "bin": JSON.stringify(this.users[i])
    }
  };
  @ViewChild('input') input!: IonInput;

  constructor(
    private loadingController: LoadingController,
    private navCtrl: NavController,
    private router: Router,
    private route: ActivatedRoute,
    private binLookupService: BinLookupService,
    private alertController: AlertController) { }


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

  ionViewDidEnter() {
    this.input.setFocus();
  }

  focusInput() {
    // Focus the input field for physical keyboard input
    this.input.setFocus();

    // Check if the input is currently read-only
    if (this.input.readonly) {
      // If input is read-only, make it editable and show the virtual keyboard
      this.input.readonly = false;
      Keyboard.show();  // Show the virtual keyboard
    } else {
      // If input is editable, make it read-only and hide the virtual keyboard
      this.input.readonly = true;
      Keyboard.hide();  // Hide the virtual keyboard
    }
  }

  // focusInput() {
  //   this.input.setFocus();  // Focuses the input field to make it ready for physical keyboard input
  //   if(this.input.readonly == true){
  //     this.input.readonly=false;
  //     Keyboard.show();
  //   } else {
  //     this.input.readonly=true;
  //     Keyboard.hide();
  //   }
  // }

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

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.binDetail = JSON.parse(params["binDetail"]);
    });

    console.log("binDetail =", this.binDetail);

    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });
  }

   // Reset the input value before leaving the component
   ionViewWillLeave() {
    this.barcode = "";
    this.input.value = "";
  }

  async scan(): Promise<void> {
    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentAlert();
      return;
    }
    const { barcodes } = await BarcodeScanner.scan();
    this.barcodes.push(...barcodes);
    var rawCode = barcodes[0].rawValue;
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

  async getProductArticles() {
    console.log('Valid barcode. Showing loading...');
    const loading = await this.loadingController.create({
      cssClass: 'default-loading',
      message: '<p>Searching</p><span>Please wait...</span>',
      spinner: 'crescent'
    });
    await loading.present();
    if(this.barcode.startsWith("]E0")){
      this.barcode = this.barcode.substring(3);
    }
    var barcode1 = this.barcode; ;

    var param = {
      code: barcode1,
      location: this.binDetail.location
    };

    // this.barcode="";

    this.binLookupService.testProductArticles(param).subscribe({
      next: async (resp) => {
        loading.dismiss();

        this.productArticle = resp.d.results;

        if (this.productArticle.length != 0) {
          // setTimeout(() => {
          // loading.dismiss();
          // console.log('Loading dismissed. Navigating to the next page...');
          this.binDetail = {
            location: this.binDetail.location,
            code: barcode1,
          };

          this.navigationExtras = {
            queryParams: {
              "binDetail": JSON.stringify(this.binDetail)
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
                  setTimeout(() => {
                    this.input.value = "";
                    this.input.setFocus();
                  },150);
                  
                }
              }
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
                setTimeout(() => {
                  this.input.value = "";
                  this.input.setFocus();
                },150);
                
              }
            }
          ],
          cssClass: 'custom-alert',
        });

        await alert.present();
      }
    })
  }

  async back() {
    this.router.navigate(['/bin-lookup'], this.navigationExtras);
  }


}
