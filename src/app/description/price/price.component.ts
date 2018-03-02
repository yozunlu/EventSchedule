import {Component, Input, OnInit} from '@angular/core';
import {EventService} from '../../schedule/event.service';
import {SubEventService} from '../sub-event.service';

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
  funTotal;
  foodTotal;
  transportationTotal;

  constructor(private eventService: EventService, private subEventService: SubEventService) { }

  ngOnInit() {
    this.subEvents = this.subEventService.getSubEvents();
    this.calcTotalPrice();

    this.subEventService.subEventsChanged.subscribe(
      (data: any[]) => {
        this.subEvents = data;
        this.calcTotalPrice();
      });
  }

  calcTotalPrice () {

    this.totalPrice = this.subEvents.filter(f => f.id === this.id).map(obj => obj.price).reduce((prev, ccurrent) => ccurrent + prev, 0);

    this.accommodationTotal = this.subEvents.filter(f => f.type.name === 'Accommodation' && f.id === this.id)
      .map(obj => obj.price)
      .reduce((prev, ccurrent) => ccurrent + prev, 0);

    this.funTotal = this.subEvents.filter(f => f.type.name === 'Fun' && f.id === this.id)
      .map(obj => obj.price)
      .reduce((prev, ccurrent) => ccurrent + prev, 0);

    this.foodTotal = this.subEvents.filter(f => f.type.name === 'Food' && f.id === this.id)
      .map(obj => obj.price)
      .reduce((prev, ccurrent) => ccurrent + prev, 0);

    this.transportationTotal = this.subEvents.filter(f => f.type.name === 'Transportation' && f.id === this.id)
      .map(obj => obj.price)
      .reduce((prev, ccurrent) => ccurrent + prev, 0);

  }

}
