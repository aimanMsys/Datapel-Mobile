import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse-order',
  templateUrl: './browse-order.page.html',
  styleUrls: ['./browse-order.page.scss'],
})
export class BrowseOrderPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  scanQr(){
    this.router.navigate(['/scan-search-order']);    
  }

  review(){
    this.router.navigate(['/review-order-browse']);  
  }

}
