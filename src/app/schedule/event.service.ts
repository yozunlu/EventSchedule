import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class EventService {

  public eventsChanged = new Subject();
  modalOpen = new Subject();

  constructor() {
    this.eventsChanged.next(this.events.slice());
  }

  events = [
    {
      'title': 'All Day Event',
      'start': '2018-01-01'
    },
    {
      'title': 'Long Event',
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
