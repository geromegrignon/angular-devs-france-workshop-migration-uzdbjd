import {Component, EventEmitter, model, output, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {EventService} from "../../event.service";
import {debounceTime, Observable, startWith, switchMap} from "rxjs";
import {CommunityEvent} from "../../models/community-event.model";
import {Router} from "@angular/router";
import {outputFromObservable, outputToObservable, toObservable, toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {
  searchControl = new FormControl('', {nonNullable: true});
  filteredEvents = this.searchControl.valueChanges.pipe(
    startWith(''),
    debounceTime(300),
    switchMap(searchTerm => this.eventService.search(searchTerm))
  );

  /*

  // <input [(ngModel)]="search" />

  search = model();
  filtered = toSignal(toObservable(this.search).pipe(
    startWith(''),
    debounceTime(300),
    switchMap(searchTerm => this.eventService.search(searchTerm))
  ));


   */

  constructor(
    private readonly eventService: EventService,
    private readonly router: Router
  ) {
  }

  navigate(id: string): void {
    this.router.navigate([`${id}`]);
  }
}
