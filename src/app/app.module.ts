import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventItemComponent } from './events/event-list/event-item/event-item.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { HeaderComponent } from './header/header.component';
import { RequirementsListComponent } from './requirements-list/requirements-list.component';
import { RequirementEditComponent } from './requirements-list/requirement-edit/requirement-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventListComponent,
    EventItemComponent,
    EventDetailComponent,
    HeaderComponent,
    RequirementsListComponent,
    RequirementEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
