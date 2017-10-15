import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent }   from './component/dashboard/dashboard.component';
import { HeroesComponent }      from './component/heroes/heroes.component';
import { HeroDetailComponent }  from './component/hero-detail/hero-detail.component';
import { HeroFormComponent } from './component/hero-form/hero-form.component';
import { WikiComponent } from './component/wiki/wiki.component';
import { HeroListComponent } from './component/hero-list/animate.component';
import { AboutComponent } from './component/about/about.component';
import { EchartComponent } from './component/echarts/echart.component';
import { ParentComponent } from './component/parent/parent.component';

// auth-guard
import { AuthGuard }                from './auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full', data: {title: '英雄列表'} },
  { path: 'dashboard',  component: DashBoardComponent, data: {title: '英雄列表'} },
  { path: 'detail/:id', component: HeroDetailComponent, data: {title: '英雄详情'}},
  { path: 'heroes',     component: HeroesComponent, data: {title:　"英雄"} },
  { path: 'heroform',     component: HeroFormComponent, data: {title:"英雄表单"} },
  { path: 'wiki',     component: WikiComponent, data: {title: "维基百科"} },
  { path: 'animate',     component: HeroListComponent, data: {title: "动画"} },
  { path: 'about', component: AboutComponent, data: {title: '关于'}},
  { path: 'chart', component: EchartComponent, data: {title: '报表'}},
  { path: 'communicate', component: ParentComponent, data: {title: '组件通信'}},
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
