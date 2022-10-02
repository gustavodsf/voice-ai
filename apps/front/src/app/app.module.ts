import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MicrophoneComponent } from './microphone/microphone.component';
import { DialogflowComponent } from './dialogflow/dialogflow.component';
import { WaveformComponent } from './waveform/waveform.component';

import { IoService } from './services/io.service';
import { FulfillmentService} from './services/fulfillment.service';
import { EventService} from './services/event.service';

@NgModule({
  declarations: [
    AppComponent,
    MicrophoneComponent,
    DialogflowComponent,
    WaveformComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [
    IoService,
    FulfillmentService,
    EventService
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
