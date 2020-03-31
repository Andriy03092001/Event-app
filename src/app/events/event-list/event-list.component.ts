import { Component, OnInit } from '@angular/core';
import { Event } from "../event.model";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  events: Event[] = [
    new Event('Java Script', 'promisse and fentch', 'https://s3.tproger.ru/uploads/2016/07/minipromises.png'),
    new Event('HTML/CSS', 'list and html', 'https://i.ytimg.com/vi/CeJmtFatBuY/maxresdefault.jpg'),
    new Event('React', 'Work with routing components', 'https://o7planning.org/ru/12137/cache/images/i/26762061.png'),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

