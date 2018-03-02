import {Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {SelectItem} from 'primeng/api';
import {EventService} from '../event.service';

import * as _ from 'lodash';


@Component({
  selector: 'app-event-start',
  templateUrl: './event-start.component.html',
  styleUrls: ['./event-start.component.css']
})
export class EventStartComponent implements OnInit {

  eventsLastItem;
  lastid;
  types: SelectItem[];
  eventForm: FormGroup;

  constructor(private eventService: EventService) {}

  ngOnInit() {

    // !! It needs to follow ids
      this.eventsLastItem = _.last(this.eventService.getEvents());
      if (this.eventsLastItem === undefined || null) {
        this.lastid = 0;
      } else {
        this.lastid = this.eventsLastItem.id;
    }

    this.eventService.eventsChanged.subscribe((data: any[]) => {
      this.eventsLastItem = _.last(data);
     });

    this.initForm();
  }

  onSubmit() {
    console.log(this.eventForm.value);

    this.eventService.addEvent(this.eventForm.value);
    this.eventService.modalOpen.next(false);
    this.eventForm.reset();
  }

  private initForm() {

    this.lastid = this.lastid + 1;

    console.log(this.lastid);

    this.eventForm = new FormGroup({
      'id': new FormControl(this.lastid, Validators.required),
      'title': new FormControl(null, Validators.required),
      'start': new FormControl(null, Validators.required),
      'end':  new FormControl(null, Validators.required),
    });
  }

}
