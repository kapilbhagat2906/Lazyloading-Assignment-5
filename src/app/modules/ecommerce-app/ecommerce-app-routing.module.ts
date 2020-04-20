import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './components';
import { ProductResolverService } from './services/product.resolve';


const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    resolve: { data: ProductResolverService }
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceAppRoutingModule { }
