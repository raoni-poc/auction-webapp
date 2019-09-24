import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {Select2Module} from 'ng2-select2';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CompanyTableComponent} from './modules/company/company-table/company-table.component';
import {NavbarComponent} from './modules/common/bootstrap/navbar/navbar.component';
import {CompanyInsertComponent} from './modules/company/company-insert/company-insert.component';
import {CardErrorComponent} from './modules/common/bootstrap/card-error/card-error.component';
import {ListErrorComponent} from './modules/common/bootstrap/list-error/list-error.component';
import {CompanyFormComponent} from './modules/company/company-form/company-form.component';
import {FieldErrorComponent} from './modules/common/bootstrap/field-error/field-error.component';
import {CompanyShowComponent} from './modules/company/company-show/company-show.component';
import {CompanyEditComponent} from './modules/company/company-edit/company-edit.component';
import {CompanyDeleteComponent} from './modules/company/company-delete/company-delete.component';
import {AccountStatusDestroyComponent} from './modules/account-status/account-status-destroy/account-status-destroy.component';
import {AccountStatusEditComponent} from './modules/account-status/account-status-edit/account-status-edit.component';
import {AccountStatusFormComponent} from './modules/account-status/account-status-form/account-status-form.component';
import {AccountStatusInsertComponent} from './modules/account-status/account-status-insert/account-status-insert.component';
import {AccountStatusShowComponent} from './modules/account-status/account-status-show/account-status-show.component';
import {AccountStatusTableComponent} from './modules/account-status/account-status-table/account-status-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CardErrorComponent,
    ListErrorComponent,
    FieldErrorComponent,
    NavbarComponent,
    CompanyTableComponent,
    CompanyFormComponent,
    CompanyInsertComponent,
    CompanyShowComponent,
    CompanyEditComponent,
    CompanyDeleteComponent,
    AccountStatusDestroyComponent,
    AccountStatusEditComponent,
    AccountStatusFormComponent,
    AccountStatusInsertComponent,
    AccountStatusShowComponent,
    AccountStatusTableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    Select2Module,
  ],
  exports: [AppComponent, CardErrorComponent],
  entryComponents: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
