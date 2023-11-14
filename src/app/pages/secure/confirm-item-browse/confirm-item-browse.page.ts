import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-item-browse',
  templateUrl: './confirm-item-browse.page.html',
  styleUrls: ['./confirm-item-browse.page.scss'],
})
export class ConfirmItemBrowsePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  scanBatch(){
    this.router.navigate(['/scan-batch-browse']);  
  }
}
