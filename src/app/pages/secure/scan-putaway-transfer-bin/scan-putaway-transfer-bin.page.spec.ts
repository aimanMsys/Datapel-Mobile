import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScanPutawayTransferBinPage } from './scan-putaway-transfer-bin.page';

describe('ScanPutawayTransferBinPage', () => {
  let component: ScanPutawayTransferBinPage;
  let fixture: ComponentFixture<ScanPutawayTransferBinPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanPutawayTransferBinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScanPutawayTransferBinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
