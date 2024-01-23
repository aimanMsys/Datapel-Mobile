import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-scan-box-lookup',
  templateUrl: './scan-box-lookup.page.html',
  styleUrls: ['./scan-box-lookup.page.scss'],
})
export class ScanBoxLookupPage implements OnInit {

  constructor(
    private router: Router,
    private loadingController: LoadingController,
  ) { }

  firstSearch:boolean = true;

  ngOnInit() {
  }

  async result(){
    const search = document.getElementById('search');
    
    // if(search.style.display == 'none'){
    //   search.style.display = 'block';
    // } else{
    //   search.style.display = 'none';
    // }  

    // Proceed with loading overlay
    const loading = await this.loadingController.create({
      cssClass: 'default-loading',
      message: '<p><ion-icon name="search-circle-outline" style="margin-right: 5px;"></ion-icon> Searching</p><span>Please wait...</span>',
      spinner: 'crescent'
    });
    await loading.present();

    // TODO: Add your sign in logic
    // ...

    // Fake timeout
    setTimeout(async () => {

      // Sign in success
      // await this.router.navigate(['/home2']);
      search.style.display = 'block';
      loading.dismiss();
      this.firstSearch = false;
    }, 2000);
    

    // this.router.navigate(['/scan-box-result-lookup']);    
  }

  

}
