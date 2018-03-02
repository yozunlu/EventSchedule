import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class SubEventService {

  public subEventsChanged = new Subject();

  subEvents = this.getSubEvents();

    getSubEvents () {
      let localStorageItem = JSON.parse(localStorage.getItem('subEvents'));
      return localStorageItem === null || undefined ? [] : localStorageItem.subEvents;
    }

    addSubEvent (subEvent) {
      this.subEvents.push(subEvent);
      this.setLocalStorageEvents(this.subEvents);
      this.subEventsChanged.next(this.subEvents.slice());
    }

  private setLocalStorageEvents (subEvents) {
    localStorage.setItem('subEvents', JSON.stringify({ subEvents: subEvents }));
  }
}
