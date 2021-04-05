import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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