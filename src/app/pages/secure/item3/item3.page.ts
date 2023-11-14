import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item3',
  templateUrl: './item3.page.html',
  styleUrls: ['./item3.page.scss'],
})
export class Item3Page implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }
  gotobinrefill(){
    this.router.navigateByUrl('/binrefills')
  }
  gotoitem2(){
    this.router.navigateByUrl('/item2')
  }
}
