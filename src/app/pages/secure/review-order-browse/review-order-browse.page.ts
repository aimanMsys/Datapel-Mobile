import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-order-browse',
  templateUrl: './review-order-browse.page.html',
  styleUrls: ['./review-order-browse.page.scss'],
})
export class ReviewOrderBrowsePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  scanBin(){
    this.router.navigate(['/scan-box-browse']);  
  }

}
