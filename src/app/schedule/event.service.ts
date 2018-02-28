import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class EventService {

  public eventsChanged = new Subject();
  modalOpen = new Subject();

  constructor() {}

  events = [
    {
      'id': 1,
      'title': 'All Day Travel',
      'start': '2018-01-01'
    },
    {
      'id': 2,
      'title': 'Long Travel',
      'start': '2018-02-07',
      'end': '2018-02-10',
    }
  ];

  getEvents () {
    return this.events.slice();
    // return this.eventsChanged.next(this.events.slice());

  }
  addEvent(event) {
    this.events.push(event);
    this.eventsChanged.next(this.events.slice());
  }
}
