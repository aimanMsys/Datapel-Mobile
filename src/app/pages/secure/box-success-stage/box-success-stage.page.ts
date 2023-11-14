import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-box-success-stage',
  templateUrl: './box-success-stage.page.html',
  styleUrls: ['./box-success-stage.page.scss'],
})
export class BoxSuccessStagePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  completeStage(){
    this.router.navigate(['/complete-stage']);    
  }

  scan(){
    this.router.navigate(['/scan-box-stage']); 
  }

}
