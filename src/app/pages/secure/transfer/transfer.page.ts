import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ChangeDetectionStrategy } from '@angular/core';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.page.html',
  styleUrls: ['./transfer.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransferPage implements OnInit {
  hideText1: boolean = true;
  hideText2: boolean;
  selectedSourceLocation: string = 'Select Source Location';

  constructor(
    private router: Router,
    private ngZone: NgZone,
    private navCtrl: NavController,
    private cdr: ChangeDetectorRef // Inject ChangeDetectorRef
  ) { }

  ionViewWillEnter() {
    this.hideText1 = true;
    this.selectedSourceLocation = 'Select Source Location';
  }

  ngOnInit() {
    this.hideText1 = true;
    this.hideText2 = localStorage.getItem('hideText2') === 'true';
  }

  toggleText1() {
    if (!this.hideText1) {
      // If hideText1 is false (visible), set selectedSourceLocation and navigate to the next page
      this.selectedSourceLocation = 'Select Source Location';
      this.router.navigate(['/next-page']);
  
      this.ngZone.run(() => {
        // Your code goes here
      });
    } else {
      // If hideText1 is true (hidden), set selectedSourceLocation to 'Select Destination Location'
      this.selectedSourceLocation = 'Select Destination Location';
    }
  
    // Toggle hideText1
    this.hideText1 = !this.hideText1;
  
    // Manually trigger change detection
    this.cdr.detectChanges();
  
    // Save hideText1 state in localStorage
    localStorage.setItem('hideText1', this.hideText1.toString());
  }
  

  scanpickbin() {
    this.router.navigate(['/trans-scanpickbin']);
  }
  
  transferThis(){
    this.router.navigate (['/trans-destination'])
  }
}
