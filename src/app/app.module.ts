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




@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    EventStartComponent
  ],
  imports: [
    BrowserModule,
    ScheduleModule,
    DialogModule,
    BrowserAnimationsModule,
    ListboxModule,
    CalendarModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
