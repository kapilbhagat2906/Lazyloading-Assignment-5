import { Injectable } from "@angular/core";
import { ProductService } from './product.service';
import { ProductType } from '../models/product.model';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class ProductResolverService implements Resolve<Array<ProductType>>{
    constructor(private productService: ProductService) { }

    resolve (): Observable<Array<ProductType>> {
        return this.productService.getData();
    }
}
