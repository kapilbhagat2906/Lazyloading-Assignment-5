import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components';
import { DataResolverService } from './services/data.resolve';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    resolve: { data: DataResolverService }
  },
  {
    path: 'countdownTimer',
    loadChildren: () => import('./modules/countdown-timer/countdown-timer.module').then(m => m.CountdownTimerModule)
  },
  {
    path: 'bannerRotation',
    loadChildren: () => import('./modules/banner-rotation/banner-rotation.module').then(m => m.BannerRotationModule)
  },
  {
    path: 'ecommerceApp',
    loadChildren: () => import('./modules/ecommerce-app/ecommerce-app.module').then(m => m.EcommerceAppModule)
  },
  {
    path: 'tableSorting',
    loadChildren: () => import('./modules/table-sorting/table-sorting.module').then(m => m.TableSortingModule)
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
