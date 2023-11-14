import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-order-detail-collect',
  templateUrl: './order-detail-collect.page.html',
  styleUrls: ['./order-detail-collect.page.scss'],
})
export class OrderDetailCollectPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  scanCollect(){
    this.router.navigate(['/scan-box-collect']);    
  }

}
