import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scan-box-browse',
  templateUrl: './scan-box-browse.page.html',
  styleUrls: ['./scan-box-browse.page.scss'],
})
export class ScanBoxBrowsePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  scanBin(){
    this.router.navigate(['/scan-bin-browse']);  
  }

}
