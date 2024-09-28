import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentmoodleComponent } from './contentmoodle.component';

describe('ContentmoodleComponent', () => {
  let component: ContentmoodleComponent;
  let fixture: ComponentFixture<ContentmoodleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentmoodleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentmoodleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
