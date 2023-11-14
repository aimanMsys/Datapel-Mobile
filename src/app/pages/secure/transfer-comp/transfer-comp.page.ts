import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-transfer-comp',
  templateUrl: './transfer-comp.page.html',
  styleUrls: ['./transfer-comp.page.scss'],
})
export class TransferCompPage implements OnInit {

  constructor(
    private router: Router

  ) { }

  ngOnInit() {
  }

  transfer(){
    this.router.navigate (['/transfer'])
  } 

   home(){
    this.router.navigate (['/home2'])
   } 

}
