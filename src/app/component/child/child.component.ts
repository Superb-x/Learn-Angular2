import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

class Hero {
  constructor(
    public id: number,
    public name: string,
    public power: string,
  ){}
}

@Component({
    selector: 'child',
    templateUrl: 'child.component.html',
    styleUrls: ['child.component.css']
})

export class ChildComponent implements OnInit {
    @Input() hero: Hero;
    @Input('master') masterName: string;
    
    private _name = '';
    @Input()
    set name(name: string) {
        this._name = (name && name.trim()) || '<no name set>';
    }
    get name(): string { return this._name; }
    constructor() { }
    
    ngOnInit() { }
    msg = '子组件';

    @Output() onVote = new EventEmitter<boolean>();
    voted = false;
    vote(agreed: boolean) {
        this.onVote.emit(agreed);
        this.voted = true;
    }
}