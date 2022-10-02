import { Component } from '@angular/core';

import { EventService } from './services/event.service';

@Component({
  selector: 'voice-ai-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private title = 'Voice Streaming AI';
  public isInActive: boolean;
  
  constructor(public eventService: EventService) {
    this.isInActive = true;
  }

  onReset() {
    this.eventService.resetInterface.emit();
  }
}
