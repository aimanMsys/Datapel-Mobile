import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-scan-bin',
  templateUrl: './scan-bin.page.html',
  styleUrls: ['./scan-bin.page.scss'],
})
export class ScanBinPage implements OnInit {

  constructor(
    private loadingController: LoadingController,
    private navCtrl: NavController,
    private router: Router
    ) { }
  
  async logout(){
    const loading = await this.loadingController.create({
      message: 'Logging Out...',
    });
    await loading.present();

    setTimeout(() => {
      loading.dismiss();
      this.router.navigate(['/signin']);
    },2000);
  }

  ngOnInit() {
  }

  PreviousPage() {
    this.router.navigate(['/jas-main']);
  }

  Backpage() {
    this.router.navigate(['/home']);
  }
}
