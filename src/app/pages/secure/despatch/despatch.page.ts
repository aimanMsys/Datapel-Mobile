import { Component, OnInit } from '@angular/core';
import { CheckboxCustomEvent, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-despatch',
  templateUrl: './despatch.page.html',
  styleUrls: ['./despatch.page.scss'],
})
export class DespatchPage implements OnInit {

  canDismiss = false;

  presentingElement = null;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }

  // onTermsChanged(event: Event) {
  //   const ev = event as CheckboxCustomEvent;
  //   this.canDismiss = ev.detail.checked;
  // }

  browse(){
    this.router.navigate(['/browse-order']);
    
  }

  search(){
    this.router.navigate(['/scan-search-order']);
    
  }

  stageCollect(){
    this.router.navigate(['/stage-collect-order']);
    
  }
}
