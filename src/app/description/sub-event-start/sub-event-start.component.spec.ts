import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubEventStartComponent } from './sub-event-start.component';

describe('SubEventStartComponent', () => {
  let component: SubEventStartComponent;
  let fixture: ComponentFixture<SubEventStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubEventStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubEventStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
