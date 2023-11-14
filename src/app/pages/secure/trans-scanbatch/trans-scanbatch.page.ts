import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-trans-scanbatch',
  templateUrl: './trans-scanbatch.page.html',
  styleUrls: ['./trans-scanbatch.page.scss'],
})
export class TransScanbatchPage implements OnInit {

  constructor(
    private router: Router

  ) { }

  ngOnInit() {
  }


   back(){
    this.router.navigate (['/transfer'])
   } 

}
