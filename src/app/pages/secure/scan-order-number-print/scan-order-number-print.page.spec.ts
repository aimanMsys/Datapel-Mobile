import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScanOrderNumberPrintPage } from './scan-order-number-print.page';

describe('ScanOrderNumberPrintPage', () => {
  let component: ScanOrderNumberPrintPage;
  let fixture: ComponentFixture<ScanOrderNumberPrintPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanOrderNumberPrintPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScanOrderNumberPrintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
