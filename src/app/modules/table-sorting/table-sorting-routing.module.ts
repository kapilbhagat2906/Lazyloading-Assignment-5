import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserinfoComponent } from './components/userinfo/userinfo.component';
import { UserResolverService } from './services/user.resolve';


const routes: Routes = [
  {
    path: '',
    component: UserinfoComponent,
    resolve: { data: UserResolverService}
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
export class TableSortingRoutingModule { }
