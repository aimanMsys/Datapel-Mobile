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
      this.selectedSourceLocation = 'Select Source Location';
    } else {
      this.selectedSourceLocation = 'Select Destination Location';
      this.router.navigate(['/next-page']);

      this.ngZone.run(() => {
        // Your code goes here
      });
    }

    this.hideText1 = !this.hideText1;

    // Manually trigger change detection
    this.cdr.detectChanges();

    localStorage.setItem('hideText1', this.hideText1.toString());
  }

  scanpickbin() {
    this.router.navigate(['/trans-scanpickbin']);
  }
}
