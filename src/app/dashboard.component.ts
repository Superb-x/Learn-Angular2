import {Component, OnInit} from '@angular/core';

import {Hero} from './hero';
import {HeroService} from './services/hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './templates/dashboard.component.html'
})

export class DashBoardComponent implements OnInit {
    heroes: Hero[] = [];
    constructor(private heroService: HeroService){};

    ngOnInit(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
}