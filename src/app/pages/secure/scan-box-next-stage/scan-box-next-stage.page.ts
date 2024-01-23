import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scan-box-next-stage',
  templateUrl: './scan-box-next-stage.page.html',
  styleUrls: ['./scan-box-next-stage.page.scss'],
})
export class ScanBoxNextStagePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  confirmBox(){
    this.router.navigate(['/confirm-box-stage']);    
  }


}
