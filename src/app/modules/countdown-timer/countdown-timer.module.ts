import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CountdownTimerRoutingModule } from './countdown-timer-routing.module';

import { CountdownTimerComponent, TimerComponent, ControlsComponent, StatusComponent } from './components';
import { KeysPipe } from './pipes/keys.pipe';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    CountdownTimerComponent,
    TimerComponent,
    ControlsComponent,
    StatusComponent,
    KeysPipe
  ],
  providers: [
    MessageService
  ],
  imports: [
    CommonModule,
    CountdownTimerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CountdownTimerModule { }
