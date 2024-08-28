import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AlertController, LoadingController } from '@ionic/angular';
import { StockLookupService } from 'src/app/services/stock-lookup.service';


@Component({
  selector: 'app-stock-moredetails',
  templateUrl: './stock-moredetails.page.html',
  styleUrls: ['./stock-moredetails.page.scss'],
})
export class StockMoredetailsPage implements OnInit {

  id:any;
  batchId:any;
  loading:boolean=false;
  data:any;
  numbering:number=0;
  udf = Array.from({ length: 23 }, (_, index) => index + 1);
  newUdf:any;
  mappedUDFs:any[]=[];
  
  constructor(
    private router: Router,
    private loadingController: LoadingController,
    private route: ActivatedRoute,
    private stockLookupService: StockLookupService,
    private alertController: AlertController,
  ) { }

  async ngOnInit() {
    const loading = await this.loadingController.create({
      cssClass: 'default-loading',
      message: '<p>Loading</p><span>Please wait...</span>',
      spinner: 'crescent'
    });
    await loading.present();

    
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.batchId = params.get('batchId');
      console.log(this.id); // Now you have access to the ID parameter
    });
    this.search();
    setTimeout(async () => {
      loading.dismiss();
    }, 3000);
    // this.mapUdf();
    
    
    // console.log(mappedUDFs);Details
  } 

  home(){
    this.router.navigate(['/stock-detail',this.id,this.batchId]);
  } 

  home2(){
    this.router.navigate(['/home'])
  }

  signin(){
    this.router.navigate(['/signin'])
  }

  

  callUdfConfig(){
    this.stockLookupService.udfConfig().subscribe({
      next: async (resp) => {
        
        this.newUdf = resp.d.results;
        this.mappedUDFs = this.mapUDFs(this.data.Details[0], this.newUdf);

          console.log("mappedUDFs =",this.mappedUDFs);

      }, error: (error) => {
        this.loading = false;
        
      }
    })
  }

  normalizeUDF(udf) {
    return udf.toUpperCase().replace(/^UDF0?/, 'UDF');
  }
  
 
  mapUDFs(details, config) {
    console.log(" details =",details);
    // return config.map(cfg => {
    //   const value = details[0][cfg.UDF] || ""; // Extract the value from details using the UDF key
    //   return {
    //     Label: cfg.Label,
    //     Value: value,
    //     IsVisible: cfg.IsVisible
    //   };
    // });

    return config.map((udfConfigItem) => {
      const normalizedUDF = this.normalizeUDF(udfConfigItem.UDF);
      console.log(" normalizedUDF ="+normalizedUDF);
      console.log("details[normalizedUDF] ="+details[normalizedUDF]);
      const value = details[normalizedUDF] || "";
      return {
        Label: udfConfigItem.Label,
        Value: value,
        IsVisible: udfConfigItem.IsVisible
      };
    });

    
  }

  async signout(){
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

  search(){
  
      this.stockLookupService.product(this.id).subscribe({
        next: (resp) => {
          this.loading = false;
   
          this.data = resp;
          console.log(this.data.Details);
          
          this.callUdfConfig();
          
          
  
        }, error: (error) => {
          this.presentAlert(error.statusMessage, "error")
        }
      })
  
      
    
    }
  
    async presentAlert(header: string, message: string) {
      const alert = await this.alertController.create({
        cssClass: 'custom-alert', // Apply the custom CSS class
        header: header,
        message: message,
        buttons: ['OK']
      });
      await alert.present();
    }
}
