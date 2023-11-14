import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-bin-lookup',
  templateUrl: './bin-lookup.page.html',
  styleUrls: ['./bin-lookup.page.scss'],
})
export class BinLookupPage implements OnInit {

  constructor(
    private loadingController: LoadingController,
    private navCtrl: NavController,
    private router: Router
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
   
  }

 


  nextPage(){
    this.router.navigate(['/jas-main']);
  }

  previousPage(){
    this.router.navigate(['/home']);
  }

}
