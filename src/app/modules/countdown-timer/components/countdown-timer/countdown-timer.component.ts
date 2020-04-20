import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { TimerStatusModel } from '../../models/timerStatus.model';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit {
  timerCount: number = 0;
  isPaused: boolean;  //  only used to be passed to timer component to control paused state animation
  timerInterval;

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  onTimerStartPause (data: {isPaused: boolean, timerLimit: number}) {
    this.timerCount = this.timerCount || (data && data.timerLimit) || 0;
    let pauseTimer: boolean = (data && data.isPaused) || false;
    this.isPaused = pauseTimer;

    if (!pauseTimer) {
      this.messageService.add(new TimerStatusModel('started', this.timerCount, new Date()));
      this.timerInterval = setInterval (() => {
        --this.timerCount;
        if (!this.timerCount) {
          // stop timer once timer count reaches 0.
          this.messageService.clear();
          clearInterval(this.timerInterval);
        }
      }, 1000);
    } else {
      if (this.timerInterval) {
        this.messageService.add(new TimerStatusModel('paused', this.timerCount, new Date()));
        //  clear interval on pause.
        clearInterval(this.timerInterval);
      }
    }
  }

  onTimerReset () {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerCount = 0;
      this.isPaused = false;
      //  clear messages/statuses on reste
      this.messageService.clear();
    }
  }

}
