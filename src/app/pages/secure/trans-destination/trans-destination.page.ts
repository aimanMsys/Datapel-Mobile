import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { BinLookupService } from 'src/app/services/bin-lookup.service';
import { TransferService } from 'src/app/services/transfer.service';

@Component({
  selector: 'app-trans-destination',
  templateUrl: './trans-destination.page.html',
  styleUrls: ['./trans-destination.page.scss'],
})
export class TransDestinationPage implements OnInit {
  transferParam: any;
  
  locationList:any[]=[];
  location:any;
  pageDetail:any;
  currentPage: number;
  pageSize: number;
  data: any[];
  locationBins: any;

  constructor(    
    private router: Router,
    
    private loadingController: LoadingController,
    private alertController: AlertController,
    private binLookupService: BinLookupService,
    private transferService : TransferService
  ) { }

  ngOnInit() {

    this.currentPage = 0;
    this.pageSize = 7;
    this.data = [];

    this.transferParam = JSON.parse(localStorage.getItem('transferParam'));
    console.log("transfer Param =",this.transferParam);
    this.getLocationList();
  }

  transferDestination(destination){
    this.getLocationBins(destination);
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

  async getLocationBins(locationCode:any){

    const loading = await this.loadingController.create({
      cssClass: 'default-loading',
      message: '<p>Loading</p><span>Please wait...</span> ',
      spinner: 'crescent'
    });
    await loading.present();

    this.transferService.getLocationBins(locationCode.LocationCode).subscribe({
      next: async (resp) => {
        loading.dismiss();
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
              this.transferParam.destination = locationCode;
              console.log("dest =",JSON.stringify(this.transferParam));
              localStorage.setItem('transferParam', JSON.stringify(this.transferParam));
              this.router.navigate(['/trans-scanpickbin'])
            }
        }

        

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


  // nextPage(locationCode:any){

  //   this.pageDetail = {
  //     location:locationCode
  //   };

  //   this.navigationExtras = {
  //     queryParams: {
  //       "pageDetail":JSON.stringify(this.pageDetail)
  //         // "bin": JSON.stringify(this.users[i])
  //     }
  //   };
  //   this.router.navigate(['/trans-destination'],  this.navigationExtras);
  // }


}
