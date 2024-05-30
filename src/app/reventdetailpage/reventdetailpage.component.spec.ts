import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReventdetailpageComponent } from './reventdetailpage.component';

describe('ReventdetailpageComponent', () => {
  let component: ReventdetailpageComponent;
  let fixture: ComponentFixture<ReventdetailpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReventdetailpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReventdetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
