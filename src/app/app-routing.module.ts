import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CompanyListComponent} from './modules/company/company-list/company-list.component';

const routes: Routes = [
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },
  // {
  //   path: 'sing-up',
  //   component: SignUpComponent
  // },
  // {
  //   path: 'sing-up/success',
  //   component: SignUpSuccessComponent
  // },
  {
    path: 'company/list',
    component: CompanyListComponent,
  },
  // {
  //   path: 'company/show/:id',
  //   component: CompanyShowComponent,
  // },
  // {
  //   path: 'company/new',
  //   component: CompanyInsertComponent,
  // },
  // {
  //   path: '',
  //   redirectTo: '/login',
  //   pathMatch: 'full'
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
