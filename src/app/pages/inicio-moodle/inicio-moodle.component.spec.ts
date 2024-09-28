import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioMoodleComponent } from './inicio-moodle.component';

describe('InicioMoodleComponent', () => {
  let component: InicioMoodleComponent;
  let fixture: ComponentFixture<InicioMoodleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioMoodleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InicioMoodleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
