import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventStartComponent } from './event-start.component';

describe('EventStartComponent', () => {
  let component: EventStartComponent;
  let fixture: ComponentFixture<EventStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
