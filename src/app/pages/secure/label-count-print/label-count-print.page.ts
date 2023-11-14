import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-label-count-print',
  templateUrl: './label-count-print.page.html',
  styleUrls: ['./label-count-print.page.scss'],
})
export class LabelCountPrintPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  continue(){
    this.router.navigate(['/device-format-print']);    
  }


}
