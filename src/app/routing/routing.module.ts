import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../modules/layout/dashboard/dashboard.component';
import { LoginComponent } from '../modules/login/login.component';
import { RegisterComponent } from '../modules/register/register.component';
import { ForgotPasswordComponent } from '../modules/layout/forgot-password/forgot-password.component';
import { ManageComponent } from '../modules/vault/manage/manage.component';
import { CreateComponent } from '../modules/vault/create/create.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: DashboardComponent,
  //   children: [{ path: '', redirectTo: '/home', pathMatch: 'full' }]
  // },
  { path: '', component: CreateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent }
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule {}
