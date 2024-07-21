import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { BinLookupService } from 'src/app/services/bin-lookup.service';

@Component({
  selector: 'app-scan-bin',
  templateUrl: './scan-bin.page.html',
  styleUrls: ['./scan-bin.page.scss'],
})
export class ScanBinPage implements OnInit {
  productArticle:any;
  loading:boolean=false;
  binDetail:any;
  constructor(
    private loadingController: LoadingController,
    private navCtrl: NavController,
    private router: Router,
    private route: ActivatedRoute,
    private binLookupService: BinLookupService,
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
    this.route.queryParams.subscribe(params => {
      this.binDetail = JSON.parse(params["binDetail"]);
    });
    console.log(this.productArticle);
    this.getProductArticles();
  }

  PreviousPage() {
    this.router.navigate(['/jas-main']);
  }

  Backpage() {
    this.router.navigate(['/home2']);
  }

  getProductArticles(){

    var param = {
      code: this.binDetail.code,
      location:this.binDetail.location
    };

    this.binLookupService.testProductArticles(param).subscribe({
      next: (resp) => {
        
        this.productArticle = resp.d.results;

      }, error: (error) => {
        this.loading = false;
        
      }
    })
  }
}
