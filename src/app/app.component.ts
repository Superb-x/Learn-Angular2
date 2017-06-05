import {Component} from '@angular/core';

import { AppState } from "./app.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent {
    title = 'Tour of Heroes';
    public BASE_API = 'https://www.baidu.com';
    constructor(
        private state: AppState
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
        }
    ];
    getIndex(index){
        console.log('before: ', index, 'after: ', this.state.get('index'));
        this.state.set('index', index);
        
    }
}
