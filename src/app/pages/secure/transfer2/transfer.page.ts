import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.page.html',
  styleUrls: ['./transfer.page.scss'],
})
export class TransferPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  nextPage(){
    this.router.navigate(['/transfer-destination']);
  }

}
