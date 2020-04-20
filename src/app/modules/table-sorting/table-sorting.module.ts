import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TableSortingRoutingModule } from './table-sorting-routing.module';

import { MessageService } from './services/message.service';
import { HttpErrorHandler } from './services/http-error-handler.service';
import { UserService } from './services/user.service';
import { UserinfoComponent } from './components/userinfo/userinfo.component';
import { SortPipe } from './pipes/sort.pipe';
import { UserResolverService } from './services/user.resolve';

@NgModule({
  declarations: [
    UserinfoComponent,
    SortPipe
  ],
  imports: [
    CommonModule,
    TableSortingRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    MessageService,
    HttpErrorHandler,
    UserService,
    UserResolverService
  ]
})
export class TableSortingModule { }
