import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stage-collect-order',
  templateUrl: './stage-collect-order.page.html',
  styleUrls: ['./stage-collect-order.page.scss'],
})
export class StageCollectOrderPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  lookup(){
    this.router.navigate(['/scan-box-lookup']);    
  }

  print(){
    this.router.navigate(['/scan-order-number-print']);    
  }

  scanStageBox(){
    this.router.navigate(['/scan-box-stage']); 
  }

  collect(){
    this.router.navigate(['/order-detail-collect']); 
  }

  

}
