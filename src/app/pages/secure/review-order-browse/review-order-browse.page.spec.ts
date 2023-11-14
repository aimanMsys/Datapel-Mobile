import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReviewOrderBrowsePage } from './review-order-browse.page';

describe('ReviewOrderBrowsePage', () => {
  let component: ReviewOrderBrowsePage;
  let fixture: ComponentFixture<ReviewOrderBrowsePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewOrderBrowsePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReviewOrderBrowsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
