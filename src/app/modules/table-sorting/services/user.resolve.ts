import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';
import { UserService } from './user.service';
import { UserType } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class UserResolverService implements Resolve<Array<UserType>> {
    constructor (
        private userService: UserService
    ) { }

    resolve (): Observable<Array<UserType>> {
        return this.userService.getUsers();
    }
}
