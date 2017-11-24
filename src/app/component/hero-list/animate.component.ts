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
            state('void', style({width:'100%', opacity: 0}) ),
            state('*', style({width:'100%', opacity: 1}) ),
            transition(':enter', [  // before 2.1: transition('void => *', [
                style({opacity: 0}),
                animate('0.5s ease-in-out', style({ opacity: 1}))
            ])
        ]),
        trigger("slider", [
            state("on", style({
                "z-index": 3,
                "transform": "translate3D(0,0,0)"
            })),
            state("prev", style({
                "z-index": 1,
                "transform": "translate3D(-100%, 0, 0)"
            })),
            state("next", style({
                "z-index": 2,
                "transform": "translate3D(100%, 0, 0)"
            })),
            state("off", style({
                "z-index": 0,
                "transform": "translate3D(0,0,0)",
                "display": "none"
            })),
            transition("prev<=>on", [
                animate("0.3s ease-in-out")
            ]),
            transition("next<=>on", [
                animate("0.3s ease-in-out")
            ])
        ])
    ],
    host: {'[@fadeInAnimation]': ''}
})

export class HeroListComponent implements OnInit {
    state: string = 'small';
    private current = 0;
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

    slideState(index){  
        if (this.imgUrl && this.imgUrl.length) {
            if (this.current === 0) {
                return index === 0 ? 'on' : index === 1 ? 'next' : index === this.imgUrl.length - 1 ? 'prev' : 'off';
            } else if (this.current === this.imgUrl.length - 1) {
                return index === this.imgUrl.length - 1 ? 'on' :
                index === this.imgUrl.length - 2 ? 'prev' :
                index === 0 ? 'next' :'off';
            }
            switch (index - this.current) {
                case 0:
                    return 'on';
                case 1:
                    return 'next';
                case -1:
                    return 'prev';
                default:
                    return 'off';
            }
        } else {
            return 'off';
        }
    }

    prev(){
        this.current = this.current - 1 < 0 ? this.imgUrl.length - 1 : this.current - 1;
    }

    next(){
        this.current = (this.current + 1) % this.imgUrl.length;  // 取模就好了
    }
}