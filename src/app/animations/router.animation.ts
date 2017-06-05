import {trigger, state, animate, style, transition} from '@angular/animations';

export function routerTransition() {
  return slideToLeft();
}

function slideToLeft() {
  return trigger('routerTransition', [
    state('void', style({position:'fixed', width:'100%', opacity: 0}) ),
    state('*', style({position:'fixed', width:'100%', opacity: 1}) ),
    transition(':enter', [  // before 2.1: transition('void => *', [
      style({opacity: 0}),
      animate('0.5s ease-in-out', style({ opacity: 1}))
    ]),
    // transition(':leave', [  // before 2.1: transition('* => void', [
    //   style({transform: 'translate3D(0%, 0, 0)'}),
    //   animate('0.5s ease-in-out', style({transform: 'translate3D(-100%, 0, 0)'}))
    // ])
  ]);
}