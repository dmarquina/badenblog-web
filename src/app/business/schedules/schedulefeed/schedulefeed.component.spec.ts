import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulefeedComponent } from './schedulefeed.component';

describe('SchedulefeedComponent', () => {
  let component: SchedulefeedComponent;
  let fixture: ComponentFixture<SchedulefeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulefeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulefeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
