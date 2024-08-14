import {Component, inject} from '@angular/core';
import {CommunityEvent} from "../../models/community-event.model";
import {ActivatedRoute} from "@angular/router";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrl: './event-item.component.css'
})
export class EventItemComponent {
  route = inject(ActivatedRoute);
  sanitizer = inject(DomSanitizer);
  event: CommunityEvent = this.route.snapshot.data['event'];

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
