import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-scan-box-collect',
  templateUrl: './scan-box-collect.page.html',
  styleUrls: ['./scan-box-collect.page.scss'],
})
export class ScanBoxCollectPage implements OnInit {

  nextBox:boolean = false;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {    
    this.route.queryParams.subscribe(params => {
      this.nextBox = params["nextBox"];
      if (this.nextBox) {
          // this.getDetail();
      }
    });
  }

  confirm(){
    this.router.navigate(['/confirm-box-collect']);    
  }


}
