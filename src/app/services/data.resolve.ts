import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';
import { AssignmentType } from '../models/assignment.model';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: "root"
})
export class DataResolverService implements Resolve<Array<AssignmentType>> {
    constructor (
        private dataService: DataService
    ) { }

    resolve (): Observable<Array<AssignmentType>> {
        return this.dataService.getAssignmentsData()
            .pipe(
                catchError ((error) => {
                    console.log('Error Occured During Data Resolving');
                    console.log(error);
                    return []
                })
            );
    }
}
