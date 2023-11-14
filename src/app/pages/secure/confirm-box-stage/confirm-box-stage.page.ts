import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-box-stage',
  templateUrl: './confirm-box-stage.page.html',
  styleUrls: ['./confirm-box-stage.page.scss'],
})
export class ConfirmBoxStagePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  stagingArea(){
    this.router.navigate(['/scan-staging-area-stage']);    
  }

}
