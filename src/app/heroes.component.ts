import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Hero} from './hero';

import {HeroService} from './services/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './templates/heroes.component.html',
  styleUrls: ['./styles/heroes.component.css'],
  providers: []
})

export class HeroesComponent {
  title = 'Tour of heroes';
  heroes = [];
  hero = {
    name: ''
  };
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
  ngOnInit(): void {
    this.getHeroes();
  };
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id])
  };
  add(name: string): void {
    name = name.trim();
    if (!name){return;};
    this.heroService.create(name).then(hero => {
      console.log(hero);
      this.heroes.push(hero);
      this.selectedHero = null;
    })
  };
  delete(hero: Hero): void {
    this.heroService.delete(hero.id).then(() => {
      this.heroes = this.heroes.filter(h => h !== hero);
      if (this.selectedHero === hero) {this.selectedHero = null;}
    })
  }
  onKey($event: any, name: string): void {
    if ($event.key === 'Enter'){
      console.log(this.hero.name);
      this.add(this.hero.name);
      this.hero = {
        name: ''
      }
    }
  }
}
