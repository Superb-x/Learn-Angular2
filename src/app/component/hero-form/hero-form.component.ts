import {Component} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import {Hero} from './hero';

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html'
})

export class HeroFormComponent {
  constructor(
    private http: Http
  ){}
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  car = [];

  onSubmit() {
    this.submitted = true;
  }

  newHero() {
    this.model = new Hero(42, '', '');
  }
  get diagnostic() { return JSON.stringify(this.model); }

  private headers = new Headers({'Content-Type': 'application/json'});

  getMembers() {
    let MEMBERS_URL = `https://api.github.com/orgs/angular/members?page=1&per_page=5`;
    let xhr = new XMLHttpRequest(); // (1)
    xhr.open("GET", MEMBERS_URL); // (2)
    xhr.onreadystatechange = () => { // (3)
      if (xhr.readyState == 4 && xhr.status == 200) { // (4)
        if (xhr.responseText) {
          try {
            this.car = JSON.parse(xhr.responseText); // (5)
            console.log(this.car)
          } catch (error) {
            throw error;
          }
        }
      }
    };
    xhr.send(null); // (6)
  }

  onHt() {
    this.http.get(`https://api.github.com/orgs/angular/members?page=1&per_page=5`)
      .map(res => res.json())
      .subscribe(data => {
        if (data) this.car = data;
        console.log(this.car)
      });
  }

}
