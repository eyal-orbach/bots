import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetSimilarityComponent } from './tweet-similarity.component';

describe('TweetSimilarityComponent', () => {
  let component: TweetSimilarityComponent;
  let fixture: ComponentFixture<TweetSimilarityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetSimilarityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetSimilarityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
