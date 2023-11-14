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

  gotoTransfer(){
    this.router.navigateByUrl('/transer-scanpickbin')
  }

  gotoUrgentbinrefill(){
    this.router.navigateByUrl('/urgentbinrefill')
  }
  ngOnInit() {
  }

}
