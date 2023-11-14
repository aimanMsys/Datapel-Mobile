import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-format-stage',
  templateUrl: './device-format-stage.page.html',
  styleUrls: ['./device-format-stage.page.scss'],
})
export class DeviceFormatStagePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  continue(){
    this.router.navigate(['/scan-search-order']);    
  }


}
