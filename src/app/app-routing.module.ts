import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {CompanyTableComponent} from './modules/company/company-table/company-table.component';
import {CompanyInsertComponent} from './modules/company/company-insert/company-insert.component';
import {CompanyShowComponent} from './modules/company/company-show/company-show.component';
import {CompanyEditComponent} from './modules/company/company-edit/company-edit.component';
import {CompanyDeleteComponent} from './modules/company/company-delete/company-delete.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  // *******************************
  {
    path: 'company',
    component: CompanyTableComponent,
  },
  {
    path: 'company/new',
    component: CompanyInsertComponent,
  },
  {
    path: 'company/:id',
    component: CompanyShowComponent,
  },
  {
    path: 'company/edit/:id',
    component: CompanyEditComponent,
  },
  {
    path: 'company/delete/:id',
    component: CompanyDeleteComponent,
  },
  // *******************************
  // {
  //   path: 'account-status',
  //   component: AccountStatusTableComponent,
  // },
  // {
  //   path: 'account-status/new',
  //   component: AccountStatusInsertComponent,
  // },
  // {
  //   path: 'account-status/:id',
  //   component: AccountStatusShowComponent,
  // },
  // {
  //   path: 'account-status/edit/:id',
  //   component: AccountStatusEditComponent,
  // },
  // {
  //   path: 'account-status/delete/:id',
  //   component: AccountStatusDestroyComponent,
  // },
  // *******************************
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
