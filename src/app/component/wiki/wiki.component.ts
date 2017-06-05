import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { Subject } from 'rxjs/Subject';
import { WikipediaService } from '../../services/wikipedia.service';
import { fadeInAnimation } from "../../animations/fade-in.animation";
import { routerTransition } from "../../animations/router.animation";
import { AppState } from "../../app.service";

@Component({
  selector: 'my-wiki-smart',
  template: `
    <h1>Smarter Wikipedia Demo</h1>
    <p (click)="showData()">Search when typing stops</p>
    <input #term (keyup)="search(term.value)"/>
    <ul>
      <li *ngFor="let item of items | async;index as i;even as j">
        <p><a href="https://zh.wikipedia.org/wiki/{{item}}" target="_blank">{{i}} {{item}}</a></p>
      </li>
    </ul>`,
  providers: [ WikipediaService ],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class WikiComponent implements OnInit {
  items: Observable<string[]>;
  constructor (
    private wikipediaService: WikipediaService,
    private state: AppState
  ) {}
  private searchTermStream = new Subject<string>();
  search(term: string) { this.searchTermStream.next(term)}
  ngOnInit() {
    this.items = this.searchTermStream
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap((term: string) => this.wikipediaService.search(term));
  }
  showData() {
    console.log(this.state.get('index'));
    return 123
  }
}
