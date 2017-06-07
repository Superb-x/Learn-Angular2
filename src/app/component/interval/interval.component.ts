import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
    selector: 'interval',
    templateUrl: 'interval.component.html',
    styleUrls: ['interval.component.css']
})

export class IntervalComponent implements OnInit, OnDestroy {
    //父组件传递截止日期
    @Input() endDate: number;
    //父组件传递标题
    @Input() title: string;
    //相差天数
    private day: number;
    //小时差
    private hour: number;
    //分钟差
    private minute: number;
    //秒数差
    private second: number;
    //时间差
    private _diff: number;

    private get diff(){
        return this._diff;
    }

    private set diff(val){
        this._diff = Math.floor(val / 1000);
        this.day = Math.floor(this._diff / 3600 / 24);
        this.hour = Math.floor(this._diff / 3600 % 24);
        this.minute = Math.floor((this._diff % 3600) / 60);
        this.second = (this._diff % 3600) % 60;
    }
    private timer;

    // 每一秒更新时间差
    ngOnInit() {
        this.timer = setInterval(() => {
            console.log(this.diff)
            this.diff = this.endDate - Date.now();
        }, 1000);
    }
    constructor() { }

    ngOnDestroy() {
        if(this.timer){
            clearInterval(this.timer);
        }
    }
}