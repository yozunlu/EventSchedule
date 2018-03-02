import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


import {ScheduleComponent} from './schedule/schedule.component';
import { EventStartComponent } from './schedule/event-start/event-start.component';
import {EventService} from './schedule/event.service';

import 'jquery';
import 'moment';
import 'fullcalendar';

import {CalendarModule, ScheduleModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ListboxModule} from 'primeng/listbox';
import {ButtonModule} from 'primeng/button';
import {ReactiveFormsModule} from '@angular/forms';
import { DescriptionComponent } from './description/description.component';
import {SubEventService} from './description/sub-event.service';
import { SubEventStartComponent } from './description/sub-event-start/sub-event-start.component';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {PriceComponent} from './description/price/price.component';





@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    EventStartComponent,
    DescriptionComponent,
    SubEventStartComponent,
    PriceComponent
  ],
  imports: [
    BrowserModule,
    ScheduleModule,
    DialogModule,
    BrowserAnimationsModule,
    ListboxModule,
    CalendarModule,
    ButtonModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  providers: [EventService, SubEventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
