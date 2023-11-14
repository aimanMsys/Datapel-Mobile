import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-label-count-collect',
  templateUrl: './label-count-collect.page.html',
  styleUrls: ['./label-count-collect.page.scss'],
})
export class LabelCountCollectPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  continue(){
    this.router.navigate(['/device-format-collect']);    
  }


}
