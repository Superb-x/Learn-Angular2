import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'countdown-timer',
    template: `<p>{{message}}</p>`
})

export class CountdownTimerComponent implements OnInit, OnDestroy {
    intervalId = 0;
    message= '';
    seconds = 11;

    clearTimer(){clearInterval(this.intervalId)}

    ngOnInit() {  }
    ngOnDestroy(){}

    start() {this.countDown();}
    stop() {
        this.clearTimer();
        this.message = `Holding at T-${this.seconds} seconds`;
    }

    private countDown(){
        this.clearTimer();
        this.intervalId = window.setInterval(() => {
            this.seconds -= 1;
            if(this.seconds === 0){
                this.message = '发射';
            } else {
                if(this.seconds < 0) {this.seconds = 10;} //重置一下
                this.message = `T-${this.seconds} seconds and counting`
            }
        }, 1000)
    }
}