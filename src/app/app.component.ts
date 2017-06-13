import {Component, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";

import { AppState } from "./app.service";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
    title = 'Tour of Heroes';
    public BASE_API = 'https://www.baidu.com';
    constructor(
        private state: AppState,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title
    ){}
    linkArr = [
        {
            name: 'Heroes',
            url: '/heroes'
        },
        {
            name: 'Dashboard',
            url: '/dashboard'
        },
        {
            name: 'Heroform',
            url: '/heroform'
        },
        {
            name: 'Wiki',
            url: '/wiki'
        },
        {
            name: 'Animate',
            url: '/animate'
        },
        {
            name: 'About',
            url: '/about'
        },
        {
            name: 'Chart',
            url: '/chart'
        }
    ];
    getIndex(index){
        console.log('before: ', index, 'after: ', this.state.get('index'));
        this.state.set('index', index);
        
    }
    ngOnInit(){
        this.router.events.filter(event => event instanceof NavigationEnd)
            .map(() => this.activatedRoute)
            .map((route) => {
                while(route.firstChild) {
                    route = route.firstChild;
                }
                return route;
            })
            .mergeMap(route => route.data)
            .subscribe((event) => {
                console.log('NavigationEnd:', event);
                this.titleService.setTitle(event['title']);
            });
    }
}
