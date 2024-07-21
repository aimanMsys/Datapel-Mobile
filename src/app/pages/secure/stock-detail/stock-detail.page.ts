import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {  AlertController, LoadingController } from '@ionic/angular';
import { StockLookupService } from 'src/app/services/stock-lookup.service';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.page.html',
  styleUrls: ['./stock-detail.page.scss'],
})


export class StockDetailPage implements OnInit {

  private loading;
  id:any;
  data:any;
  numbering:number=0;

  constructor(   
    private router: Router,
    private loadingController: LoadingController,
    private route: ActivatedRoute,
    private stockLookupService: StockLookupService,
    private alertController: AlertController,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id); // Now you have access to the ID parameter
    });
    this.search();
  }

  scan(){
    this.router.navigate(['/stock-lookup']);
  }

  findArticle(){
    this.router.navigate(['/stock-batchscanner',this.id]);
  }

  next(){
    this.router.navigate(['/stock-moredetails',this.id])
  }

  home(){
    this.router.navigate(['/home2'])
  }

  signin(){
    this.router.navigate(['/signin'])
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
  this.loading = true;

    this.stockLookupService.product(this.id).subscribe({
      next: (resp) => {
        this.loading = false;
 
        this.data = resp;

        // setTimeout(async () => {
          // this.router.navigate(['/stock-batchscanner',this.id]);
        //   loading.dismiss();
        // }, 2000);
        

      }, error: (error) => {
        this.loading = false;
        this.presentAlert(error.statusMessage, "error")
        this.loading = false;
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



