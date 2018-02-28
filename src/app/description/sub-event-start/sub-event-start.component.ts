import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SubEventService} from '../sub-event.service';
import {EventService} from '../../schedule/event.service';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-sub-event-start',
  templateUrl: './sub-event-start.component.html',
  styleUrls: ['./sub-event-start.component.css']
})
export class SubEventStartComponent implements OnInit {

  @Input() id: number;
  subEventForm: FormGroup;
  types: SelectItem[];

  constructor(private subEventService: SubEventService,
              private eventService: EventService) {
    this.types = [
      {label: 'Accommodation', value: {id: 1, name: 'Accommodation', code: 'AC'}},
      {label: 'Fun', value: {id: 2, name: 'Fun', code: 'FU'}},
      {label: 'Food', value: {id: 3, name: 'Food', code: 'FO'}},
      {label: 'Transportation', value: {id: 4, name: 'Transportation', code: 'TR'}},
    ];
  }

  ngOnInit() {

    // this.events = this.eventService.getEvent();
    // this.id = this.eventService.getEvent(this.subEvent);
    this.initForm();
  }

  onSubmit() {

    // console.log(this.id);
    // console.log(this.subEventForm.value);
    this.subEventService.addSubEvent(this.subEventForm.value);
    this.eventService.modalOpen.next(false);
    this.subEventForm.reset();
  }

  private initForm() {

    this.subEventForm = new FormGroup({
      'id': new FormControl(this.id),
      'name': new FormControl(null, Validators.required),
      'start': new FormControl(null, Validators.required),
      'end':  new FormControl(null, Validators.required),
      'price':  new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'type': new FormControl(null, Validators.required)
    });
  }
}
