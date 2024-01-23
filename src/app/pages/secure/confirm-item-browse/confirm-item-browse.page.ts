import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonRouterOutlet, LoadingController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-confirm-item-browse',
  templateUrl: './confirm-item-browse.page.html',
  styleUrls: ['./confirm-item-browse.page.scss'],
})
export class ConfirmItemBrowsePage implements OnInit {

  constructor(
    private router: Router,
    private alertController: AlertController,
  ) { }

  ngOnInit() {
  }

  scanBatch(){
    this.router.navigate(['/scan-batch-browse']);  
  }

  async confirmContinue() {
    const alert = await this.alertController.create({
      cssClass: 'custom-alert',
      header: 'Confirm Exit of Scan Order lines?',
      // message: 'This action cannot be undone.',
      buttons: [
        {
          text: 'Back',
          role: 'cancel',
          cssClass: 'cancel'
        },
        {
          text: 'Confirm',
          // cssClass: 'danger',
          handler: async () => {
            // this.toastService.presentToast('Success', 'Card successfully deleted', 'top', 'success', 2000);
            this.scanBatch();
          }
        }
      ]
    });

    await alert.present();
  }


}
