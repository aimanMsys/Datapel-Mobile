import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; // Import AlertController
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-trans-scanpickbin',
  templateUrl: './trans-scanpickbin.page.html',
  styleUrls: ['./trans-scanpickbin.page.scss'],
})
export class TransScanpickbinPage {

  constructor(
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {}

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

  barcode: string;
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

  async checkBarcodeInput() {
    console.log('Barcode entered:', this.barcode);
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
        this.router.navigate(['/transfer-scanproduct']);
      }, 2000);
    } else {
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
}
