import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from './admin-panel.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [

  {
    path: '',
    component: AdminPanelComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'transactions',
        loadChildren: ()=> import(`../transactions/transactions.module`).then( m => m.TransactionsModule)
      },
      {
        path: 'parties',
        loadChildren: ()=> import(`../parties/parties.module`).then( m => m.PartiesModule)
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
