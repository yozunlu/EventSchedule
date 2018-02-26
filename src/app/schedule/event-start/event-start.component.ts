import {Component, OnInit, } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {SelectItem} from 'primeng/api';
import {EventService} from '../event.service';

@Component({
  selector: 'app-event-start',
  templateUrl: './event-start.component.html',
  styleUrls: ['./event-start.component.css']
})
export class EventStartComponent implements OnInit {


  types: SelectItem[];
  eventForm: FormGroup;

  constructor(private eventService: EventService) {

    this.types = [
      {label: 'Accommodation', value: {id: 1, name: 'Accommodation', code: 'AC'}},
      {label: 'Fun', value: {id: 2, name: 'Fun', code: 'FU'}},
      {label: 'Food', value: {id: 3, name: 'Food', code: 'FO'}},
      {label: 'Transportation', value: {id: 4, name: 'Transportation', code: 'TR'}},
    ];
  }

  ngOnInit() {
    this.initForm();
  }
  onSubmit() {
    // console.log(this.eventForm);
    this.eventService.addEvent(this.eventForm.value);
    this.eventService.modalOpen.next(false);
    this.eventForm.reset();
  }

  private initForm() {
    this.eventForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'start': new FormControl(null, Validators.required),
      'end':  new FormControl(null, Validators.required),
      'price':  new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'type': new FormControl(null, Validators.required)
    });
  }

}
