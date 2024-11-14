import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-transfer-comp',
  templateUrl: './transfer-comp.page.html',
  styleUrls: ['./transfer-comp.page.scss'],
})
export class TransferCompPage implements OnInit {
  transferParam: any;
  transaction: any;

  constructor(
    private router: Router

  ) { }

  ngOnInit() {
    this.transferParam = JSON.parse(localStorage.getItem('transferParam'));
    this.transaction =  JSON.parse(localStorage.getItem('transaction'));
  }

  transfer(){
    this.router.navigate (['/transfer'])
  } 

   home(){

    localStorage.removeItem("transferParam");
    localStorage.removeItem("transaction");
    localStorage.removeItem("transferItemList");
    this.router.navigate (['/home2'])
   } 

}
