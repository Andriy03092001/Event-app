import { Component, OnInit } from '@angular/core';
import { Requirement } from "./requirements.model";

@Component({
  selector: 'app-requirements-list',
  templateUrl: './requirements-list.component.html',
  styleUrls: ['./requirements-list.component.scss']
})
export class RequirementsListComponent implements OnInit {

  requirements: Requirement[] = [
    new Requirement("Java Script", "Base know promise"),
    new Requirement("HTML/JS/SCSS", "Rest API + JULP")
  ];

  constructor() { }


  ngOnInit(): void {
  }

}
