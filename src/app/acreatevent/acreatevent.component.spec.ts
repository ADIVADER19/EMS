import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcreateventComponent } from './acreatevent.component';

describe('AcreateventComponent', () => {
  let component: AcreateventComponent;
  let fixture: ComponentFixture<AcreateventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcreateventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcreateventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
