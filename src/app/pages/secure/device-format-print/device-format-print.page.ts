import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-format-print',
  templateUrl: './device-format-print.page.html',
  styleUrls: ['./device-format-print.page.scss'],
})
export class DeviceFormatPrintPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  continue(){
    this.router.navigate(['/scan-order-number-print']);    
  }

}
