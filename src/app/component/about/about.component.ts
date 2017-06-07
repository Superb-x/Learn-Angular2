import { Component, OnInit } from '@angular/core';
import { IntervalComponent } from "../interval/interval.component";

import { fadeInAnimation } from "../../animations/fade-in.animation";
@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    animations: [fadeInAnimation()],
    host: {'[@fadeInAnimation]': ''}
})

export class AboutComponent implements OnInit {
    constructor() { }
    private endDate = new Date('2017-06-9 18:00:00');
    ngOnInit() { }
}