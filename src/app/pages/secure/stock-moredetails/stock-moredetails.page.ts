import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-stock-moredetails',
  templateUrl: './stock-moredetails.page.html',
  styleUrls: ['./stock-moredetails.page.scss'],
})
export class StockMoredetailsPage implements OnInit {

  constructor(
    private router: Router,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
  } 

  home(){
    this.router.navigate(['/stock-batchscanner']);
  } 

  home2(){
    this.router.navigate(['/home'])
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