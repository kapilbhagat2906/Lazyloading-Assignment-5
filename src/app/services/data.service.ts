import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AssignmentType } from '../models/assignment.model';

@Injectable({
    providedIn: "root"
})
export class DataService {
    constructor (
        private http: HttpClient
    ) { }

    getAssignmentsData (): Observable<Array<AssignmentType>> {
        return this.http.get<Array<AssignmentType>>('https://my-json-server.typicode.com/kapilbhagat2906/mockDataSource/assignments');
    }
}
