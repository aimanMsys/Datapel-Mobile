import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scan-box-stage',
  templateUrl: './scan-box-stage.page.html',
  styleUrls: ['./scan-box-stage.page.scss'],
})
export class ScanBoxStagePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  confirmBox(){
    this.router.navigate(['/confirm-box-stage']);    
  }

}
