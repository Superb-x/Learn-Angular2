import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'parent',
    templateUrl: 'parent.component.html',
    styleUrls: ['parent.component.css']
})

export class ParentComponent implements OnInit {
    constructor() { }
    heroes = [
        {
            id: 1,
            name: '亚索',
            power: '死亡如风，常伴吾身',
        },
        {
            id: 2,
            name: '劫',
            power: '无形之刃，最为致命',
        },
        {
            id: 3,
            name: '提莫',
            power: '我去前面探探路',
        },
        {
            id: 4,
            name: '伊泽瑞尔',
            power: '是时候表演真正的技术了',
        }
    ];
    master: String = 'Master';
    ngOnInit() { }
    msg = '父组件';
    heroname = '';
    names = ['亚索', '劫', '  ', '提莫'];
    add() {
        this.names.unshift(this.heroname);
        this.heroname = '';
    };
    major: number = 1;
    minor: number = 23;
    newMinor() {
        this.minor++;
    }
    newMajor() {
        this.major++;
        this.minor = 0;
    }
    agreed = 0;
    disagreed = 0;
    voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto'];
    onVoted(agreed: boolean) {
        console.log(agreed);
        agreed ? this.agreed++ : this.disagreed++;
    }
}