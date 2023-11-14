import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transer-scanpickbin',
  templateUrl: './transer-scanpickbin.page.html',
  styleUrls: ['./transer-scanpickbin.page.scss'],
})
export class TranserScanpickbinPage implements OnInit {

  constructor(
    private router:Router
  ) { 
  

  
  }

  gotoHome(){
    this.router.navigateByUrl('/home')
  }
  gotoBinrefills(){
    this.router.navigateByUrl('/binrefills')
  }
  ngOnInit() {
  }

}
