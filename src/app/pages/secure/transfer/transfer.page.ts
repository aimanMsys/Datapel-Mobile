import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { ChangeDetectionStrategy } from '@angular/core';
import { NgZone } from '@angular/core';
import { BinLookupService } from 'src/app/services/bin-lookup.service';
import { TransferService } from 'src/app/services/transfer.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.page.html',
  styleUrls: ['./transfer.page.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransferPage implements OnInit {
  hideText1: boolean = true;
  hideText2: boolean;
  selectedSourceLocation: string = 'Select Source Location';

  locationList:any[]=[];
  location:any;
  pageDetail:any;
  currentPage: number;
  pageSize: number;
  data: any[];
  navigationExtras: NavigationExtras = {
    queryParams: {
        // "bin": JSON.stringify(this.users[i])
    }
  };
  locationBins: any;

  constructor(
    private router: Router,
    private ngZone: NgZone,
    private navCtrl: NavController,
    private cdr: ChangeDetectorRef, // Inject ChangeDetectorRef
    
    private loadingController: LoadingController,
    private alertController: AlertController,
    private binLookupService: BinLookupService,
    private transferService : TransferService
  ) { }

  ionViewWillEnter() {
    this.hideText1 = true;
    this.selectedSourceLocation = 'Select Source Location';
  }

  ngOnInit() {
    this.hideText1 = true;
    this.hideText2 = localStorage.getItem('hideText2') === 'true';

    this.currentPage = 0;
    this.pageSize = 7;
    this.data = [];

    this.getLocationList();
    console.log(this.paginatedList);
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
  
  transferThis(location:any){
    this.getLocationBins(location);
    
  }

  async getLocationList(){
    const loading = await this.loadingController.create({
      cssClass: 'default-loading',
      message: '<p>Loading</p><span>Please wait...</span> ',
      spinner: 'crescent'
    });
    await loading.present();

    this.binLookupService.getLocationList(null).subscribe({
      next: (resp) => {
        this.locationList = resp.d.results;
        this.numberOfPages(this.locationList);
        console.log(this.locationList);
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

  get paginatedList() {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    return this.locationList.slice(start, end);
  }

  get totalPageCount() {
    return Math.ceil(this.locationList.length / this.pageSize);
  }

  
  numberOfPages(list:any) {
    return Math.ceil(list.length/this.pageSize);                
  }


  nextPage(locationCode:any){

    this.pageDetail = {
      location:locationCode
    };

    this.navigationExtras = {
      queryParams: {
        "pageDetail":JSON.stringify(this.pageDetail)
          // "bin": JSON.stringify(this.users[i])
      }
    };
    this.router.navigate(['/trans-destination'],  this.navigationExtras);
  }

  async getLocationBins(locationCode:any){

    const loading = await this.loadingController.create({
      cssClass: 'default-loading',
      message: '<p>Loading</p><span>Please wait...</span> ',
      spinner: 'crescent'
    });
    await loading.present();

    this.transferService.getLocationBins(locationCode.LocationCode).subscribe({
      next: async (resp) => {
        this.locationBins = resp.d.results;
        if(this.locationBins.length == 0) {
          const alert = await this.alertController.create({
        
            header: 'System Alert',
            message: locationCode.LocationCode +' has 0 BIN',
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
        } else {
                  
            if(this.locationBins.length != 0){
              var transferParam = {
                source:locationCode
              };
              localStorage.setItem('transferParam', JSON.stringify(transferParam));
              this.router.navigate (['/trans-destination']);
            }
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
