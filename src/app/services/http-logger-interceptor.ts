import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HandleError, HttpErrorHandler } from './http-error-handler.service';

@Injectable()
export class HttpLoggerInterceptor implements HttpInterceptor {
    handleHttpError: HandleError;
    constructor (
        private httpErrorHandler: HttpErrorHandler
    ) {
        this.handleHttpError = this.httpErrorHandler.createHandleError('HttpLoggerInterceptor');
    }

    intercept (request: HttpRequest<any>, next: HttpHandler): Observable<any> {
        return next.handle(request)
            .pipe(
                catchError(this.handleHttpError<any>('logger', {}))
            );
    }
}
