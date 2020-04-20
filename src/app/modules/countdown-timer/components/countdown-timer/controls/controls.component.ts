import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TimerStatusModel } from '../../../models/timerStatus.model';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  isPaused: boolean = true;
  messages: Array<TimerStatusModel>;

  @Output()
  onTimerStartPause: EventEmitter<{ isPaused: boolean, timerLimit: number}> = new EventEmitter();

  @Output()
  onTimerReset: EventEmitter<void> = new EventEmitter();

  timerForm: FormGroup = new FormGroup({
    timerLimit: new FormControl ('0')
  });

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.messages = this.messageService.messages;
  }

  startPauseTimer (event) {
    let timerLimitControl = this.timerForm.get('timerLimit');
    let timerLimit = parseInt(timerLimitControl.value) || 0;
    if (timerLimit) {
      this.isPaused = !this.isPaused;
      timerLimitControl.disable();
      this.onTimerStartPause.emit({ isPaused: this.isPaused, timerLimit: timerLimitControl.value });
    }
  }

  resetTimer (event) {
    let timerLimitControl = this.timerForm.get('timerLimit');
    this.isPaused = true;
    timerLimitControl.setValue(0);
    timerLimitControl.enable();
    this.onTimerReset.emit();
  }
}
