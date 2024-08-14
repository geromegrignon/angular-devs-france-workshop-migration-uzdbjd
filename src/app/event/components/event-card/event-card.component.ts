import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommunityEvent} from "../../models/community-event.model";

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent {
  @Input() event!: CommunityEvent;
  @Output() favorite = new EventEmitter<void>();
}
