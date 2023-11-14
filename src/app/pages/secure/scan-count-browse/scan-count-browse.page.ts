import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scan-count-browse',
  templateUrl: './scan-count-browse.page.html',
  styleUrls: ['./scan-count-browse.page.scss'],
})
export class ScanCountBrowsePage implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  allPicked(){
    this.router.navigate(['/all-items-picked-browse']);  
  }

}
