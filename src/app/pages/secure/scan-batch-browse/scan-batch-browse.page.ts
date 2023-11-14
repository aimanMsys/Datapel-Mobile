import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scan-batch-browse',
  templateUrl: './scan-batch-browse.page.html',
  styleUrls: ['./scan-batch-browse.page.scss'],
})
export class ScanBatchBrowsePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  
  scanLot(){
    this.router.navigate(['/scan-lot-browse']);  
  }

}
