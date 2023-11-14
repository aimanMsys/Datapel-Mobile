import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {LoadingController } from '@ionic/angular';



@Component({
  selector: 'app-stock-batchscanner',
  templateUrl: './stock-batchscanner.page.html',
  styleUrls: ['./stock-batchscanner.page.scss'],
})
export class StockBatchscannerPage implements OnInit {

  constructor(
    private router: Router,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
  }
  next(){
    this.router.navigate(['/stock-moredetails'])
  }
  back(){
    this.router.navigate(['/stock-detail'])
  }
  stockmore(){
    this.router.navigate(['/stock-moredetails'])
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
}


