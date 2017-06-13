import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import {HeroService} from './services/hero.service';
import {AjaxService} from './services/ajax.service';
import { AppState, InternalStateType } from "./app.service";
import { GlobalState } from './global.state';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

//directive
import { echartsDirective } from "./directives/chart.directive";

//compnent
import { AppComponent } from './app.component';
import {HeroDetailComponent} from './component/hero-detail/hero-detail.component';
import {HeroesComponent} from './component/heroes/heroes.component';
import {DashBoardComponent} from './component/dashboard/dashboard.component';
import {HeroSearchComponent} from './component/hero-search/hero-search.component';
import {HeroFormComponent} from './component/hero-form/hero-form.component';
import { WikiComponent } from './component/wiki/wiki.component';
import { HeroListComponent } from './component/hero-list/animate.component';
import { AboutComponent } from './component/about/about.component';
import { IntervalComponent } from "./component/interval/interval.component";
import { EchartComponent } from './component/echarts/echart.component';
import { EchartsNg2Module } from 'echarts-ng2';

import {AppRoutingModule} from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    EchartsNg2Module,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashBoardComponent,
    HeroSearchComponent,
    HeroFormComponent,
    WikiComponent,
    HeroListComponent,
    AboutComponent,
    IntervalComponent,
    EchartComponent,
  ],
  providers: [HeroService, AjaxService, AppState, GlobalState, echartsDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }

