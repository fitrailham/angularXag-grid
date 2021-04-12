import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PertamaSimpelComponent } from './aplikasi-ag-grid/ag-grid-list/pertama-simpel/pertama-simpel.component';
import { DashboardComponent } from './aplikasi-ag-grid/dashboard/dashboard.component';
import { LoginComponent } from './aplikasi-ag-grid/login/login.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'pertama',
        component: PertamaSimpelComponent
      },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
        useHash: true,
        scrollPositionRestoration: 'enabled',
        preloadingStrategy: PreloadAllModules,
        relativeLinkResolution: 'legacy'
      })
  ],
  exports: [RouterModule] 
})
export class AppRoutingModule { }