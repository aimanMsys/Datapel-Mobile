import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-trans-destination',
  templateUrl: './trans-destination.page.html',
  styleUrls: ['./trans-destination.page.scss'],
})
export class TransDestinationPage implements OnInit {

  constructor(    private router: Router,) { }

  ngOnInit() {
  }

  transferDestination(){
    this.router.navigate(['/trans-scanpickbin'])
  }


}
