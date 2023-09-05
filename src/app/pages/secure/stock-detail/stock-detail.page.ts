import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.page.html',
  styleUrls: ['./stock-detail.page.scss'],
})
export class StockDetailPage implements OnInit {

  constructor(    private router: Router) { }

  ngOnInit() {
  }

  scan(){
    this.router.navigate(['/stock-lookup']);
  }
}
