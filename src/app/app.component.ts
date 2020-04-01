import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menuLoaded: string = "events";
  Navigate(Selected: string) {
    this.menuLoaded = Selected;
  }


}
