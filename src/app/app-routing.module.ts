import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent }   from './component/dashboard/dashboard.component';
import { HeroesComponent }      from './component/heroes/heroes.component';
import { HeroDetailComponent }  from './component/hero-detail/hero-detail.component';
import { HeroFormComponent } from './component/hero-form/hero-form.component';
import { WikiComponent } from './component/wiki/wiki.component';
import { HeroListComponent } from './component/hero-list/hero-list-basic.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashBoardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'heroform',     component: HeroFormComponent },
  { path: 'wiki',     component: WikiComponent },
  { path: 'animate',     component: HeroListComponent },
  
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
