import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent }   from './component/dashboard/dashboard.component';
import { HeroesComponent }      from './component/heroes/heroes.component';
import { HeroDetailComponent }  from './component/hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashBoardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
