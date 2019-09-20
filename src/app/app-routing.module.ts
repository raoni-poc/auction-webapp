import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SignUpComponent} from './components/pages/sign-up/sign-up.component';
import {LoginComponent} from './components/pages/login/login.component';
import {SignUpSuccessComponent} from './pages/sign-up-success/sign-up-success.component';
import {CompanyListComponent} from './components/company/company-list/company-list.component';
import {CompanyInsertComponent} from './components/company/company-insert/company-insert.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sing-up',
    component: SignUpComponent
  },
  {
    path: 'sing-up/success',
    component: SignUpSuccessComponent
  },
  {
    path: 'company/list',
    component: CompanyListComponent,
  },
  {
    path: 'company/new',
    component: CompanyInsertComponent,
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
