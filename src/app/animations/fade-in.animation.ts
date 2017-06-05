import { trigger, state, animate, transition, style } from '@angular/animations';

export function fadeInAnimation() {
  return fade();
}

function fade(){
    return trigger('fadeInAnimation', [
        // route 'enter' transition
        state('void', style({position:'fixed', width:'100%', opacity: 0}) ),
            state('*', style({position:'fixed', width:'100%', opacity: 1}) ),
        transition(':enter', [  // before 2.1: transition('void => *', [
            style({opacity: 0}),
            animate('0.5s ease-in-out', style({ opacity: 1}))
        ]),
        // transition(':leave', [  // before 2.1: transition('* => void', [
        //     style({opacity: 1}),
        //     animate('0.5s ease-in-out', style({opacity: 0}))
        // ])
    ]);
}
    