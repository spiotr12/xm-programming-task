import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('src/app/dashboard').then(m => m.DashboardModule) },
  { path: 'welcome', loadChildren: () => import('src/app/welcome').then(m => m.WelcomeModule) },
  { path: 'registration', loadChildren: () => import('src/app/registration').then(m => m.RegistrationModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
