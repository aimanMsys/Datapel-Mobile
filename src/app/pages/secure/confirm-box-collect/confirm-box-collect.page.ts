import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-confirm-box-collect',
  templateUrl: './confirm-box-collect.page.html',
  styleUrls: ['./confirm-box-collect.page.scss'],
})
export class ConfirmBoxCollectPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  scanNext(){
    this.router.navigate(['/scan-next-box-collect']);    
  }

}
