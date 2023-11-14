import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

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

  binlookup(){
    this.router.navigate(['/bin-lookup']);
  }
  stocklookup(){
    this.router.navigate(['/stock-lookup']);
    
  }
  Transfer(){
    this.router.navigate(['/transfer']);
  }

  despatch(){
    this.router.navigate(['/despatch']);
  }

  transfer(){
    this.router.navigate(['/transfer-menu']);
    
  }

  gotoTransfer(){
    this.router.navigateByUrl('/transer-scanpickbin')
  }

}
