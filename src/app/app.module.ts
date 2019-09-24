import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {Select2Module} from 'ng2-select2';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CollectionComponent} from './modules/common/abstract/collection/collection.component';
import {CompanyTableComponent} from './modules/company/company-table/company-table.component';
import {NavbarComponent} from './modules/common/bootstrap/navbar/navbar.component';
import {InsertComponent} from './modules/common/abstract/insert/insert.component';
import {CompanyInsertComponent} from './modules/company/company-insert/company-insert.component';
import {CardErrorComponent} from './modules/common/bootstrap/card-error/card-error.component';
import {ListErrorComponent} from './modules/common/bootstrap/list-error/list-error.component';
import {CompanyFormComponent} from './modules/company/company-form/company-form.component';
import {FieldErrorComponent} from './modules/common/bootstrap/field-error/field-error.component';
import {CompanyShowComponent} from './modules/company/company-show/company-show.component';
import {CompanyEditComponent} from './modules/company/company-edit/company-edit.component';
import {CompanyDeleteComponent} from './modules/company/company-delete/company-delete.component';
import {DestroyComponent} from './modules/common/abstract/destroy/destroy.component';

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    Select2Module
  ],
  exports: [AppComponent],
  entryComponents: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
