import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {  LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.page.html',
  styleUrls: ['./stock-detail.page.scss'],
})


export class StockDetailPage implements OnInit {

  private loading;

  constructor(   
    private router: Router,
    private loadingController: LoadingController) { }

  ngOnInit() {
  }

  scan(){
    this.router.navigate(['/stock-lookup']);
  }

  nextPage(){
    this.router.navigate(['/stock-batchscanner']);
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
  
}



