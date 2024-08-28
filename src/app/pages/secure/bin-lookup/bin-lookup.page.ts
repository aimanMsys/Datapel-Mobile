import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { BinLookupService } from 'src/app/services/bin-lookup.service';

@Component({
  selector: 'app-bin-lookup',
  templateUrl: './bin-lookup.page.html',
  styleUrls: ['./bin-lookup.page.scss'],
})
export class BinLookupPage implements OnInit {
  loading: boolean = false;
  barcode:any;
  navigationExtras: NavigationExtras = {
    queryParams: {
        // "bin": JSON.stringify(this.users[i])
    }
  };
  binDetail:any;
  locationList:any[]=[];
  location:any;
  
  currentPage: number;
  pageSize: number;
  data: any[];

  constructor(
    private loadingController: LoadingController,
    private navCtrl: NavController,
    private router: Router,
    private alertController: AlertController,
    private binLookupService: BinLookupService,
  ) { }

  async logout() {
    const loading = await this.loadingController.create({
      message: 'Logging Out...',
    });
    await loading.present();

    // Simulate a logout process (e.g., clearing user data or making API requests)
    setTimeout(() => {
      loading.dismiss(); // Dismiss the loading indicator
      // You can add your router navigation logic here
      this.router.navigate(['/signin']);
    }, 2000); // Change 2000 to the actual time your logout process may take
  }


  ngOnInit() {
    // this.navigationExtras = {
    //   queryParams: {
    //       // "bin": JSON.stringify(this.users[i])
    //   }
    // };
    
    this.currentPage = 0;
    this.pageSize = 7;
    this.data = [];
    
    this.getLocationList();
    // this.callUdfConfig();
    
   
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

    this.binDetail = {
      location:locationCode
    };

    this.navigationExtras = {
      queryParams: {
        "binDetail":JSON.stringify(this.binDetail)
          // "bin": JSON.stringify(this.users[i])
      }
    };
    this.router.navigate(['/jas-main'],  this.navigationExtras);
  }

  previousPage(){
    this.router.navigate(['/home']);
  }


  test1(){
    this.binLookupService.testInventory(this.barcode).subscribe({
      next: (resp) => {
        
        

      }, error: (error) => {
        this.loading = false;
        
      }
    })
  }

  test2(){
    this.binLookupService.testInventoryList(this.barcode).subscribe({
      next: (resp) => {
        
        

      }, error: (error) => {
        this.loading = false;
        
      }
    })
  }

  getLocation(){
    this.binLookupService.getLocation(this.barcode).subscribe({
      next: (resp) => {
        
        this.location = resp;

      }, error: (error) => {
        this.loading = false;
        
      }
    })
  }

  async getLocationList(){
    const loading = await this.loadingController.create({
      cssClass: 'default-loading',
      message: '<p>Loading</p><span>Please wait...</span> ',
      spinner: 'crescent'
    });
    await loading.present();

    this.binLookupService.getLocationList(this.barcode).subscribe({
      next: (resp) => {
        this.locationList = resp.d.results;
        this.numberOfPages(this.locationList);
        loading.dismiss();

      }, error: async (error) => {
        this.loading = false;
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

  

  test6(){
    this.binLookupService.testInventory(this.barcode).subscribe({
      next: (resp) => {
        
        

      }, error: (error) => {
        this.loading = false;
        
      }
    })
  }

}
