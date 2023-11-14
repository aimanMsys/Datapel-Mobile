import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-binrefills',
  templateUrl: './binrefills.page.html',
  styleUrls: ['./binrefills.page.scss'],
})
export class BinrefillsPage implements OnInit {

  constructor(
    private router:Router
  ) { }

  

  gotoUrgentbinrefill(){
    this.router.navigateByUrl('/urgentbinrefill')
  }
  transfer3(){
    this.router.navigateByUrl('/transfer3')
  }
  ngOnInit() {
  }

}
