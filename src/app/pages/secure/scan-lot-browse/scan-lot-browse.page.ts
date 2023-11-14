import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scan-lot-browse',
  templateUrl: './scan-lot-browse.page.html',
  styleUrls: ['./scan-lot-browse.page.scss'],
})
export class ScanLotBrowsePage implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  scanCount(){
    this.router.navigate(['/scan-count-browse']);  
  }

}
