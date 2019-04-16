import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetSimilaritySettingsComponent } from './tweet-similarity-settings.component';

describe('TweetSimilaritySettingsComponent', () => {
  let component: TweetSimilaritySettingsComponent;
  let fixture: ComponentFixture<TweetSimilaritySettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetSimilaritySettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetSimilaritySettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
