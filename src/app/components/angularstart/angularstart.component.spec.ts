import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularstartComponent } from './angularstart.component';

describe('AngularstartComponent', () => {
  let component: AngularstartComponent;
  let fixture: ComponentFixture<AngularstartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularstartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularstartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
