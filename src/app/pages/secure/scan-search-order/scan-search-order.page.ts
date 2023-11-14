import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scan-search-order',
  templateUrl: './scan-search-order.page.html',
  styleUrls: ['./scan-search-order.page.scss'],
})
export class ScanSearchOrderPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  continue(){
    this.router.navigate(['/browse-order']);    
  }

}
