import { Component, OnInit, Input } from '@angular/core';
import { Event } from "../event.model";

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  constructor() { }

  @Input() event: Event;

  ngOnInit(): void {
  }

}
