import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScanStagingAreaStagePage } from './scan-staging-area-stage.page';

describe('ScanStagingAreaStagePage', () => {
  let component: ScanStagingAreaStagePage;
  let fixture: ComponentFixture<ScanStagingAreaStagePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanStagingAreaStagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScanStagingAreaStagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
