import { Component, OnInit } from '@angular/core';

import {EventService} from '../schedule/event.service';
import {SubEventService} from './sub-event.service';


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
})
export class DescriptionComponent implements OnInit {

  display = false;
  modal = false;
  events: any[];
  subEvents: any[];

  constructor(private eventService: EventService,
              private subEventService: SubEventService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
    this.subEvents = this.subEventService.getSubEvents();

    this.eventService.modalOpen.subscribe(
      (data: boolean) => {
        if (data === false) {
          this.display = false;
        }
      }
    );

    this.eventService.eventsChanged.subscribe(
      (data: any[]) => {
        this.events = data;
        console.log(data);
      }
    );

    this.subEventService.subEventsChanged.subscribe(
      (data: any[]) => {
      this.subEvents = data;
    });

  }

  onAddSubEvent(event) {
      console.log(event);
      this.display = event.id;
  }

}
