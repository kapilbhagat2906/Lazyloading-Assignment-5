import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, keyframes, style } from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations: [
    trigger('animateRotation', [
      transition('start => stop', [
        animate('2s', keyframes([
          style({ backgroundColor: 'blue', transform: "scale(1, 1)", color: '#ffffff' }),
          style({ backgroundColor: 'green', transform: "scale(.8, .8)", color: '#ffffff' }),
          style({ backgroundColor: 'red', transform: "scale(.6, .6)", color: '#ffffff' })
        ]))
      ]),
      transition('stop => start', [
        style({ backgroundColor: 'red', transform: "scale(1, 1)", color: '#ffffff' })
      ])
    ])
  ]
})
export class AnimationComponent implements OnInit {
  text: string = "Rotating Animation Effect";
  startAnimation: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  onAnimationEvent(event) {
    this.startAnimation = !this.startAnimation;
  }
}
