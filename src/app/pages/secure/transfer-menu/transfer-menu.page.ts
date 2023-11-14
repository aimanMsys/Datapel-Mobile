import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer-menu',
  templateUrl: './transfer-menu.page.html',
  styleUrls: ['./transfer-menu.page.scss'],
})
export class TransferMenuPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  transfer(){
    this.router.navigate(['/transfer'])
  }

  home(){
    this.router.navigate(['/home'])
  }

  transferBin(){
    this.router.navigate(['/transfer-bin-source']);    
  }

}
