import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllItemsPickedBrowsePage } from './all-items-picked-browse.page';

describe('AllItemsPickedBrowsePage', () => {
  let component: AllItemsPickedBrowsePage;
  let fixture: ComponentFixture<AllItemsPickedBrowsePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllItemsPickedBrowsePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllItemsPickedBrowsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
