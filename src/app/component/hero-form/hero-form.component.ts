import {Component, OnInit} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {AjaxService} from '../../services/ajax.service';
import { fadeInAnimation } from "../../animations/fade-in.animation";
import { routerTransition } from "../../animations/router.animation";
import {Hero} from './hero';

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html',
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})

export class HeroFormComponent {
  constructor(
    private http: Http,
    private ajax: AjaxService
  ){}
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
  }

  cars = [];

  newHero() {
    this.model = new Hero(42, '', '');
  }
  get diagnostic() { return JSON.stringify(this.model); }

  private headers = new Headers({'Content-Type': 'application/json'});

  getMembers() {
    let MEMBERS_URL = `https://api.github.com/orgs/angular/members?page=1&per_page=5`;
    //let MEMBERS_URL = `http://localhost:4200/app/json/car.json`;
    let xhr = new XMLHttpRequest(); // (1)
    xhr.open("GET", MEMBERS_URL); // (2)
    xhr.onreadystatechange = () => { // (3)
      if (xhr.readyState == 4 && xhr.status == 200) { // (4)
        if (xhr.responseText) {
          try {
            this.cars = JSON.parse(xhr.responseText); // (5)
            console.log(this.cars);
          } catch (error) {
            throw error;
          }
        }
      }
    };
    xhr.send(null); // (6)
  }

  logError(err: any) {
    console.log(err);
  }
  // 注意，当请求线上地址的时候一定要将InMemoryWebApiModule模块在app.module.ts中删除或者注释掉，否则会一直报错
  private baseUrl = 'app/json/car.json';
  getActualVisits(): Promise<any[]>{
    return this.http.get(this.baseUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
  }
  onHt() {
     this.http.get(this.baseUrl).subscribe(res => {this.cars = res.json();console.log(this.cars)})
     //this.ajax.getData('api.php/v1/vehicles/getBrand').then(res => {console.log(res.data.vehicle);this.cars = res.data.vehicle})
  }

}
