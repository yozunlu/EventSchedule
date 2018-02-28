import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class SubEventService {

  public subEventsChanged = new Subject();
    subEvents = [
      {
        'id': 1,
        'name': 'Deneme',
        'start': '2018-02-07, 8.25pm',
        'end': '2018-02-07, 9.00pm',
        'type': 'Accommodation',
        'price': 100
      }
    ];
    getSubEvents () {
      return this.subEvents.slice();
    }
    addSubEvent (subEvent) {
      this.subEvents.push(subEvent);
      this.subEventsChanged.next(this.subEvents.slice());
    }
}
