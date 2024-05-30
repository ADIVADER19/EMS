import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineventdetailpageComponent } from './admineventdetailpage.component';

describe('AdmineventdetailpageComponent', () => {
  let component: AdmineventdetailpageComponent;
  let fixture: ComponentFixture<AdmineventdetailpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmineventdetailpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmineventdetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
