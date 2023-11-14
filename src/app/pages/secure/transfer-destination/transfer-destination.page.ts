import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-transfer-destination',
  templateUrl: './transfer-destination.page.html',
  styleUrls: ['./transfer-destination.page.scss'],
})
export class TransferDestinationPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  next(){
    this.router.navigate(['/scanlot']);
  }

}
