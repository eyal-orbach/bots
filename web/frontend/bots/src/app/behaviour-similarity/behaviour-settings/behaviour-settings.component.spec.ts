import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviourSettingsComponent } from './behaviour-settings.component';

describe('BehaviourSettingsComponent', () => {
  let component: BehaviourSettingsComponent;
  let fixture: ComponentFixture<BehaviourSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BehaviourSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviourSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
