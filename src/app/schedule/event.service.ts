import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class EventService {

  public eventsChanged = new Subject();
  modalOpen = new Subject();

  constructor() {}

  events = this.getEvents();

  getEvents () {
    let localStorageItem = JSON.parse(localStorage.getItem('events'));
    return localStorageItem === null || undefined ? [] : localStorageItem.events;

  }
  addEvent(event) {
    this.events.push(event);
    this.setLocalStorageEvents(this.events);
    this.eventsChanged.next(this.events.slice());
  }

  private setLocalStorageEvents (events) {
    localStorage.setItem('events', JSON.stringify({ events: events }));
  }
}
