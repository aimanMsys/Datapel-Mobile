import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-format-collect',
  templateUrl: './device-format-collect.page.html',
  styleUrls: ['./device-format-collect.page.scss'],
})
export class DeviceFormatCollectPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  detail(){
    this.router.navigate(['/order-detail-collect']);    
  }


}
