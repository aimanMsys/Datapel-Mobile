import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-all-items-picked-browse',
  templateUrl: './all-items-picked-browse.page.html',
  styleUrls: ['./all-items-picked-browse.page.scss'],
})
export class AllItemsPickedBrowsePage implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  review(){
    this.router.navigate(['/review-order-browse']);  
  }

  stage(){
    this.router.navigate(['/scan-box-stage']);  
  }

}
