import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, of} from "rxjs";
import {CommunityEvent} from "./models/community-event.model";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private readonly http: HttpClient) {
  }

  search(searchTerm: string): Observable<CommunityEvent[]> {
    return this.http.get<CommunityEvent[]>('http://localhost:3000/events').pipe(
      map(events => events.filter(event => event.title.includes(searchTerm))
      )
    );
  }

  getEvent(id: string): Observable<CommunityEvent> {
    return this.http.get<CommunityEvent>(`http://localhost:3000/events/${id}`);
  }
}
