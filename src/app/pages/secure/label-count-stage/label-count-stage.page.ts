import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-label-count-stage',
  templateUrl: './label-count-stage.page.html',
  styleUrls: ['./label-count-stage.page.scss'],
})
export class LabelCountStagePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  continue(){
    this.router.navigate(['/device-format-stage']);    
  }

}
