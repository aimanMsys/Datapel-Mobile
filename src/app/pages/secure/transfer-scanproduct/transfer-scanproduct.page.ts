import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer-scanproduct',
  templateUrl: './transfer-scanproduct.page.html',
  styleUrls: ['./transfer-scanproduct.page.scss'],
})
export class TransferScanproductPage implements OnInit {



  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  next(){
    this.router.navigate(['/trans-scanbatch'])
  }


}
