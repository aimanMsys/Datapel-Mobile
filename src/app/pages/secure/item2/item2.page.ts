import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item2',
  templateUrl: './item2.page.html',
  styleUrls: ['./item2.page.scss'],
})
export class Item2Page implements OnInit {

  constructor(
    private router:Router
  ) { }

  gotoitem1(){
    this.router.navigateByUrl('/item1')
  }
  gotoitem3(){
    this.router.navigateByUrl('/item3')
  }
  gotobinrefill(){
    this.router.navigateByUrl('/binrefills')
  }
  ngOnInit() {
  }

}
