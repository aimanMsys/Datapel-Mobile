import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-detail-print',
  templateUrl: './order-detail-print.page.html',
  styleUrls: ['./order-detail-print.page.scss'],
})
export class OrderDetailPrintPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  print(){
    this.router.navigate(['/label-count-print']);    
  }

}
