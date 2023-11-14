import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complete-collect',
  templateUrl: './complete-collect.page.html',
  styleUrls: ['./complete-collect.page.scss'],
})
export class CompleteCollectPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  labelCount(){
    this.router.navigate(['/label-count-collect']);    
  }

}
