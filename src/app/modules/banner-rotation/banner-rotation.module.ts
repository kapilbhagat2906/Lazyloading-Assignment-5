import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerRotationRoutingModule } from './banner-rotation-routing.module';
import { AnimationComponent } from './components/animation/animation.component';

@NgModule({
  declarations: [
    AnimationComponent
  ],
  imports: [
    CommonModule,
    BannerRotationRoutingModule
  ]
})
export class BannerRotationModule { }
