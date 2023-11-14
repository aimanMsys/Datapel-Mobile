import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item1',
  templateUrl: './item1.page.html',
  styleUrls: ['./item1.page.scss'],
})
export class Item1Page implements OnInit {

  constructor(
    private router:Router
  ) { }
  public item1:String="I33AZ47K125";

  ngOnInit() {
  }
  gotobinrefill(){
    this.router.navigateByUrl('/binrefills')
  }
  gotoitem2(){
    this.router.navigateByUrl('/item2')
  }
}
