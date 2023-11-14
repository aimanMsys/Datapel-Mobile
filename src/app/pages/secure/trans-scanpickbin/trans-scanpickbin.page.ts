import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; // Import AlertController

@Component({
  selector: 'app-trans-scanpickbin',
  templateUrl: './trans-scanpickbin.page.html',
  styleUrls: ['./trans-scanpickbin.page.scss'],
})
export class TransScanpickbinPage {

  constructor(private router: Router, private alertController: AlertController){}

 async nextPage(){
  // Validate barcode
  if (!this.barcode || !this.isValidBarcode(this.barcode)) {
    const alert = await this.alertController.create({
      header: 'ACTION FAILURE!',
      message: 'Scanned Bin Is Unkown',
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
}
