import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel, UserType } from '../models/user.model';
import { flatMap, map, reduce } from 'rxjs/operators';

@Injectable()
export class UserService {

    constructor(
        private http: HttpClient,
    ) { }

    getUsers () : Observable<Array<UserType>> {
        return this.http.get<Array<UserType>>('https://jsonplaceholder.typicode.com/users')
            .pipe(
                flatMap((user) => user),
                map((user) => new UserModel(user)),
                reduce((acc: [], user) => {
                    return [...acc, user];
                }, [])
            );
    }
}
