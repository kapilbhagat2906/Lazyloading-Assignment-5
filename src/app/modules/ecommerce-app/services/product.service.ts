import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductType } from '../models/product.model';

@Injectable()
export class ProductService {

    constructor (
        private http: HttpClient
    ) { }

    getData (): Observable<Array<ProductType>> {
        return this.http.get<Array<ProductType>>('https://my-json-server.typicode.com/kapilbhagat2906/PhotosMockData/photos');
    }
}
