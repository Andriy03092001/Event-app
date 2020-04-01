import { Component, OnInit } from '@angular/core';
import {Event} from "./event.model";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor() { }
  selectedEvent: Event;
  ngOnInit(): void {
  }

}
