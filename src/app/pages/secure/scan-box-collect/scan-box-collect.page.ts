import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-scan-box-collect',
  templateUrl: './scan-box-collect.page.html',
  styleUrls: ['./scan-box-collect.page.scss'],
})
export class ScanBoxCollectPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  confirm(){
    this.router.navigate(['/confirm-box-collect']);    
  }


}
