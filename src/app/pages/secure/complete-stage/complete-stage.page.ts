import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complete-stage',
  templateUrl: './complete-stage.page.html',
  styleUrls: ['./complete-stage.page.scss'],
})
export class CompleteStagePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  labelCount(){
    this.router.navigate(['/label-count-stage']);    
  }

  completeStage(){
    this.router.navigate(['/complete-stage']);    
  }

}
