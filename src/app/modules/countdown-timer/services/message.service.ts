import { Injectable } from '@angular/core';
import { TimerStatusModel } from '../models/timerStatus.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class MessageService {
  messages: TimerStatusModel[] = [];
  stats = {started: 0, paused: 0};
  statsSubject: BehaviorSubject<any> = new BehaviorSubject(this.stats);

  add(message: TimerStatusModel) {
    this.messages.push(message);
    this.stats[message.operationType]++;
    this.statsSubject.next({...this.stats});
  }

  clear() {
    this.messages.splice(0, this.messages.length);
    this.stats.paused = 0;
    this.stats.started = 0;
    this.statsSubject.next({...this.stats});
  }

  getStats (): Observable<any> {
    return this.statsSubject;
  }
}
