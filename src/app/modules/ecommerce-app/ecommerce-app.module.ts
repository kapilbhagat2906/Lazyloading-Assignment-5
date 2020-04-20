import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EcommerceAppRoutingModule } from './ecommerce-app-routing.module';
import { FormsModule } from '@angular/forms';

import { ProductService } from './services/product.service';
import { HttpErrorHandler } from './services/http-error-handler.service';
import { MessageService } from './services/message.service';
import { ProductListComponent, ProductCardComponent } from './components';
import { SortPipe } from './pipes/sort.pipe';
import { ProductResolverService } from './services/product.resolve';

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
    ProductService,
    HttpErrorHandler,
    MessageService,
    ProductResolverService
  ]
})
export class EcommerceAppModule { }
