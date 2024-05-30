import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeventdetailpageComponent } from './ceventdetailpage.component';

describe('CeventdetailpageComponent', () => {
  let component: CeventdetailpageComponent;
  let fixture: ComponentFixture<CeventdetailpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CeventdetailpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CeventdetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
