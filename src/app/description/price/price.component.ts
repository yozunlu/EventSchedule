import {Component, Input, OnInit} from '@angular/core';
import {EventService} from '../../schedule/event.service';
import {SubEventService} from '../sub-event.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  @Input() id;
  subEvents;
  totalPrice;
  accommodationTotal;
  findedSubEvents;

  constructor(private eventService: EventService, private subEventService: SubEventService) { }

  ngOnInit() {
    this.subEvents = this.subEventService.getSubEvents();
    this.calcTotalPrice();
  }

  calcTotalPrice () {

    this.totalPrice = this.subEvents.filter(f => f.id === this.id).map(obj => obj.price).reduce((prev, ccurrent) => ccurrent + prev, 0);
    console.log(this.totalPrice);

    this.accommodationTotal = this.subEvents.filter(f => f.type.name === 'Accommodation' && f.id === this.id)
      .map(obj => obj.price)
      .reduce((prev, ccurrent) => ccurrent + prev, 0);

  }

}
