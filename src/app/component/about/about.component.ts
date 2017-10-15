import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { IntervalComponent } from "../interval/interval.component";

import { fadeInAnimation } from "../../animations/fade-in.animation";

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    animations: [fadeInAnimation()],
    host: {'[@fadeInAnimation]': ''},
})

export class AboutComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
    ) {}
    private endDate = new Date('2018-1-26 18:00:00');
    ngOnInit() {
        console.log(this.route.data['value']);
    }
    list = '<img src="assets/images/1.jpg" width="500"/>';
}