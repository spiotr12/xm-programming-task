import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./dashboard').then(m => m.DashboardModule) },
  { path: 'welcome', loadChildren: () => import('./welcome').then(m => m.WelcomeModule) },
  { path: 'registration', loadChildren: () => import('./registration').then(m => m.RegistrationModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
