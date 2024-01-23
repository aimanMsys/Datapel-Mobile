import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-complete-collect',
  templateUrl: './complete-collect.page.html',
  styleUrls: ['./complete-collect.page.scss'],
})
export class CompleteCollectPage implements OnInit {

  nextBox:boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  labelCount(){
    this.router.navigate(['/label-count-collect']);    
  }

  scanNext(){
    this.router.navigate(
      ['/scan-box-collect'],
      { queryParams: { nextBox: 'true' } }
    );
  }

}
