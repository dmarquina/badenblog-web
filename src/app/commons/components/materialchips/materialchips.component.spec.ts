import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialchipsComponent } from './materialchips.component';

describe('MaterialchipsComponent', () => {
  let component: MaterialchipsComponent;
  let fixture: ComponentFixture<MaterialchipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialchipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialchipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
