import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer-bin-source',
  templateUrl: './transfer-bin-source.page.html',
  styleUrls: ['./transfer-bin-source.page.scss'],
})
export class TransferBinSourcePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  transferThis(){
    this.router.navigate(['/transfer-bin-destination']);    
  }

}
