import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {EventListComponent} from "./pages/event-list/event-list.component";
import {EventItemComponent} from "./pages/event-item/event-item.component";
import {EventResolver} from "./resolvers/event.resolver";

const routes: Routes = [
  {
    path: '',
    component: EventListComponent
  },
  {
    path: ':id',
    component: EventItemComponent,
    resolve: {
      event: EventResolver
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class EventRoutingModule { }
