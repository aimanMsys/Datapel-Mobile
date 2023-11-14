import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scan-staging-area-stage',
  templateUrl: './scan-staging-area-stage.page.html',
  styleUrls: ['./scan-staging-area-stage.page.scss'],
})
export class ScanStagingAreaStagePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  successStage(){
    this.router.navigate(['/box-success-stage']);    
  }

}
