import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {Hero} from './hero';

import {HeroService} from './services/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './templates/heroes.component.html',
  styleUrls: ['./styles/app.component.css'],
  providers: []
})

export class HeroesComponent {
  title = 'Tour of heroes';
  heroes = [];
  selectedHero: Hero;
  constructor(
    private heroService: HeroService,
    private router: Router  
  ){};
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };
  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  };
  ngOnInit(): void { //意思是初始化的时候调用，这是一个钩子函数
    this.getHeroes();
  };
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id])
  }
}
