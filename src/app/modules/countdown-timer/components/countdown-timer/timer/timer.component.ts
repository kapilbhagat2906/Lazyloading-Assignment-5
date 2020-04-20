import { Component, OnInit, Input } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  animations: [
    trigger('timerState', [
      state('dying', style({
        color: '#fff',
        background: 'lightcoral'
      })),
      state('started', style({
        background: 'lightgreen',
        color: '#fff'
      })),
      state('paused', style({
        background: 'grey',
        opacity: '.5',
        color: '#fff'
      })),
      transition('* => *', [
        animate('250ms')
      ])
    ])
  ]
})
export class TimerComponent implements OnInit {
  @Input()
  timerCount: number;

  @Input()
  isPaused: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  getTimerState () {
    let state = '';
    if (this.isPaused) {
      state = 'paused'
    } else if (this.timerCount < 5) {
      state = 'dying';
    } else {
      state = 'started';
    }

    return state;
  }

}
