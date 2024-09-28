import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexMoodleComponent } from './index-moodle.component';

describe('IndexMoodleComponent', () => {
  let component: IndexMoodleComponent;
  let fixture: ComponentFixture<IndexMoodleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexMoodleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexMoodleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
