import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//component
import {AdminComponent} from './admin.component'
import {ManageCrisesComponent} from './manage-crises.component'
import {ManageHeroesComponent} from './manage-heroes.component'
import {AdminDashboardComponent} from './admin-dashboard.component'

//auth
import {AuthGuard} from '../auth-guard.service'

const adminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            canActivateChild: [AuthGuard],
            children: [
              { path: 'crises', component: ManageCrisesComponent },
              { path: 'heroes', component: ManageHeroesComponent },
              { path: '', component: AdminDashboardComponent }
            ]
          }
        ]
      }
];
  
@NgModule({
imports: [
    RouterModule.forChild(adminRoutes)
],
exports: [
    RouterModule
]
})
export class AdminRoutingModule {}