import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountdownTimerComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: CountdownTimerComponent
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
export class CountdownTimerRoutingModule { }
