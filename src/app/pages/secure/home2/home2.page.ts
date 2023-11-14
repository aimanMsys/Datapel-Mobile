import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {

  content_loaded: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

    // Fake timeout
    setTimeout(() => {
      this.content_loaded = true;
    }, 2000);
  }

  stocklookup(){
    this.router.navigate(['/stock-lookup']);
    
  }

  despatch(){
    this.router.navigate(['/despatch']);
  }

  transfer(){
    this.router.navigate(['/transfer3']);
  }

  binlookup(){
    this.router.navigate(['/bin-lookup']);
  }

}
