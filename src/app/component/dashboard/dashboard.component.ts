import {Component, OnInit} from '@angular/core';

import {Hero} from '../../hero';
import {HeroService} from '../../services/hero.service';

import { routerTransition } from "../../animations/router.animation";

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''}
})

export class DashBoardComponent implements OnInit {
    heroes: Hero[] = [];
    constructor(private heroService: HeroService){};

    ngOnInit(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
}
