import {Component, DoCheck, OnInit} from '@angular/core';
import { OnDestroy } from '@angular/core';
import {EventService} from './event.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit, OnDestroy {

  events: any[];
  header: any;
  display = false;
  modal = false;

  constructor(private eventService: EventService) { }

  ngOnInit() {

    // Observable for closing modal
    this.eventService.modalOpen.subscribe(
      (data: boolean) => {
        if (data === false) {
          this.display = false;
        }
      }
    );

    this.events = this.eventService.getEvents();

    this.header = {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    };
    this.eventService.eventsChanged.subscribe(
      (data: any[]) => {
        this.events = data;
      }
    );
  }

  showDialog() {
    this.display = true;
    this.modal = true;
  }
  ngOnDestroy() {
    this.eventService.modalOpen.unsubscribe();
  }
}
