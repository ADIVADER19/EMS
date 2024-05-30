import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistereventComponent } from './registerevent.component';

describe('RegistereventComponent', () => {
  let component: RegistereventComponent;
  let fixture: ComponentFixture<RegistereventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistereventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistereventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
