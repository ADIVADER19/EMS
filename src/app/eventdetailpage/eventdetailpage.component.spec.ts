import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventdetailpageComponent } from './eventdetailpage.component';

describe('EventdetailpageComponent', () => {
  let component: EventdetailpageComponent;
  let fixture: ComponentFixture<EventdetailpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventdetailpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventdetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
