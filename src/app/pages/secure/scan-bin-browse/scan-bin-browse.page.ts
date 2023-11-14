import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scan-bin-browse',
  templateUrl: './scan-bin-browse.page.html',
  styleUrls: ['./scan-bin-browse.page.scss'],
})
export class ScanBinBrowsePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  confirmItem(){
    this.router.navigate(['/confirm-item-browse']);  
  }

}
