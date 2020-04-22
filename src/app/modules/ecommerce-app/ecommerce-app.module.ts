import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EcommerceAppRoutingModule } from './ecommerce-app-routing.module';
import { FormsModule } from '@angular/forms';

import { ProductService } from './services/product.service';
import { ProductListComponent, ProductCardComponent } from './components';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductCardComponent,
    SortPipe
  ],
  imports: [
    CommonModule,
    EcommerceAppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [
    ProductService
  ]
})
export class EcommerceAppModule { }
