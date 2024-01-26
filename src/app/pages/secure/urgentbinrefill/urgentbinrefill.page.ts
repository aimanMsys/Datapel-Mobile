import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-urgentbinrefill',
  templateUrl: './urgentbinrefill.page.html',
  styleUrls: ['./urgentbinrefill.page.scss'],
})
export class UrgentbinrefillPage implements OnInit {

  constructor(
    private router:Router,private loadingCtrl:LoadingController
  ) { }


  
  
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      
      cssClass:'default-loading',
      message: "<b>Checking...</b><br>Please wait....",
      duration: 3000,
      spinner:"crescent",
            
    });

       

     await loading.present();
     setTimeout(() => {
      loading.dismiss();
      console.log('Loading dismissed. Navigating to the next page...');
      this.router.navigate(['/item1']);
    }, 2000); 
  }
  


  public item:String="ABCD";

  gotobinrefill(){
    this.router.navigateByUrl('/binrefills')
  }
  ngOnInit() {
  }

}
