import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviourSimilarityComponent } from './behaviour-similarity.component';

describe('BehaviourSimilarityComponent', () => {
  let component: BehaviourSimilarityComponent;
  let fixture: ComponentFixture<BehaviourSimilarityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BehaviourSimilarityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviourSimilarityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
