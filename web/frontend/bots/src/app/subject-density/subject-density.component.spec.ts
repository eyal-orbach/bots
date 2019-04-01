import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectDensityComponent } from './subject-density.component';

describe('SubjectDensityComponent', () => {
  let component: SubjectDensityComponent;
  let fixture: ComponentFixture<SubjectDensityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectDensityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectDensityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
