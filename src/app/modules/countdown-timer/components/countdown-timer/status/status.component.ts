import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TimerStatusModel } from '../../../models/timerStatus.model';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  messages: Array<TimerStatusModel>;
  statsObservable: Observable<any>;
  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.messages = this.messageService.messages;
    this.statsObservable = this.messageService.getStats();
  }

}
