import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer-bin-destination',
  templateUrl: './transfer-bin-destination.page.html',
  styleUrls: ['./transfer-bin-destination.page.scss'],
})
export class TransferBinDestinationPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  transferDestination(){
    this.router.navigate(['/scan-transfer-bin']);    
  }


}
