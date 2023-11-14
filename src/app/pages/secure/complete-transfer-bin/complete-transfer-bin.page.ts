import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complete-transfer-bin',
  templateUrl: './complete-transfer-bin.page.html',
  styleUrls: ['./complete-transfer-bin.page.scss'],
})
export class CompleteTransferBinPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  home(){
    this.router.navigate(['/transfer3']);    
  }


}
