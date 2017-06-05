import { Component, OnInit } from '@angular/core';

import {
  trigger, //触发函数
  state,   //状态
  style,   //样式
  animate,
  keyframes,
  transition
} from '@angular/animations';

@Component({
    selector: 'animate',
    templateUrl: './animate.component.html',
    styleUrls: ['./animate.component.css'],
    animations: [
        trigger('myAwesomeAnimation', [
            state('small', style({
                transform: 'scale(1)',
            })),
            state('large', style({
                transform: 'scale(1.2)',
            })),
            transition('small <=> large', animate('300ms ease-in', keyframes([
                style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
                style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}),
                style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
            ]))),
        ]),
        trigger('fadeInAnimation', [
            state('void', style({overflow: 'hidden', width:'100%', opacity: 0}) ),
            state('*', style({overflow: 'hidden', width:'100%', opacity: 1}) ),
            transition(':enter', [  // before 2.1: transition('void => *', [
                style({opacity: 0}),
                animate('0.5s ease-in-out', style({ opacity: 1}))
            ])
        ])
    ],
    host: {'[@fadeInAnimation]': ''}
})

export class HeroListComponent implements OnInit {
    state: string = 'small';
    constructor() { }

    ngOnInit() { 
        console.log('初始化完毕')
    }

    imgUrl = [
        'assets/images/1.jpg', 
        'assets/images/2.jpg', 
        'assets/images/3.jpg', 
        'assets/images/4.jpg', 
        'assets/images/5.jpg',
        'assets/images/6.jpg'
        ]
    
    animateMe() {
        this.state = (this.state === 'small' ? 'large' : 'small');
    }
}