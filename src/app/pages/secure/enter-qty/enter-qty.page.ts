import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-enter-qty',
  templateUrl: './enter-qty.page.html',
  styleUrls: ['./enter-qty.page.scss'],
})
export class EnterQtyPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  YesPage(){
    this.router.navigate(['/scan-putaway']);
  }

  NoPage(){
    this.router.navigate(['/confirm-qty']);
  }
}
