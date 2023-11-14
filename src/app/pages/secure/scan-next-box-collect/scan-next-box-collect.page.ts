import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-scan-next-box-collect',
  templateUrl: './scan-next-box-collect.page.html',
  styleUrls: ['./scan-next-box-collect.page.scss'],
})
export class ScanNextBoxCollectPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  complete(){
    this.router.navigate(['/complete-collect']);    
  }

}
