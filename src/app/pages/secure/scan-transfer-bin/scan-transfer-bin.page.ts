import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scan-transfer-bin',
  templateUrl: './scan-transfer-bin.page.html',
  styleUrls: ['./scan-transfer-bin.page.scss'],
})
export class ScanTransferBinPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  confirmBox(){
    this.router.navigate(['/scan-putaway-transfer-bin']);    
  }

}
