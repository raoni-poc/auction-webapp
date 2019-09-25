import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {Select2Module} from 'ng2-select2';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './modules/common/bootstrap/navbar/navbar.component';
import {CardErrorComponent} from './modules/common/bootstrap/card-error/card-error.component';
import {ListErrorComponent} from './modules/common/bootstrap/list-error/list-error.component';
import {FieldErrorComponent} from './modules/common/bootstrap/field-error/field-error.component';
import {CompanyTableComponent} from './modules/company/company-table/company-table.component';
import {CompanyFormComponent} from './modules/company/company-form/company-form.component';
import {CompanyInsertComponent} from './modules/company/company-insert/company-insert.component';
import {CompanyShowComponent} from './modules/company/company-show/company-show.component';
import {CompanyEditComponent} from './modules/company/company-edit/company-edit.component';
import {CompanyDeleteComponent} from './modules/company/company-delete/company-delete.component';


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
    // AccountStatusDestroyComponent,
    // AccountStatusEditComponent,
    // AccountStatusFormComponent,
    // AccountStatusInsertComponent,
    // AccountStatusShowComponent,
    // AccountStatusTableComponent,
    // CityDestroyComponent,
    // CityEditComponent,
    // CityFormComponent,
    // CityInsertComponent,
    // CityShowComponent,
    // CityTableComponent,
    // CountryDestroyComponent,
    // CountryEditComponent,
    // CountryFormComponent,
    // CountryInsertComponent,
    // CountryShowComponent,
    // CountryTableComponent,
    // DocumentDestroyComponent,
    // DocumentEditComponent,
    // DocumentFormComponent,
    // DocumentInsertComponent,
    // DocumentShowComponent,
    // DocumentTableComponent,
    // DocumentTypeDestroyComponent,
    // DocumentTypeEditComponent,
    // DocumentTypeFormComponent,
    // DocumentTypeInsertComponent,
    // DocumentTypeShowComponent,
    // DocumentTypeTableComponent,
    // OfferTypeDestroyComponent,
    // OfferTypeEditComponent,
    // OfferTypeFormComponent,
    // OfferTypeInsertComponent,
    // OfferTypeTableComponent,
    // OfferTypeShowComponent,
    // OfferDestroyComponent,
    // OfferEditComponent,
    // OfferFormComponent,
    // OfferShowComponent,
    // OfferTableComponent,
    // OfferInsertComponent,
    // PermissionInsertComponent,
    // PermissionShowComponent,
    // PermissionEditComponent,
    // PermissionDestroyComponent,
    // PermissionFormComponent,
    // PermissionTableComponent,
    // RequirementDestroyComponent,
    // RequirementEditComponent,
    // RequirementFormComponent,
    // RequirementInsertComponent,
    // RequirementShowComponent,
    // RequirementTableComponent,
    // RequirementTypeDestroyComponent,
    // RequirementTypeEditComponent,
    // RequirementTypeFormComponent,
    // RequirementTypeInsertComponent,
    // RequirementTypeShowComponent,
    // RequirementTypeTableComponent,
    // RoleDestroyComponent,
    // RoleEditComponent,
    // RoleFormComponent,
    // RoleInsertComponent,
    // RoleShowComponent,
    // RoleTableComponent,
    // RouteDestroyComponent,
    // RouteEditComponent,
    // RouteFormComponent,
    // RouteInsertComponent,
    // RouteShowComponent,
    // RouteTableComponent,
    // StateDestroyComponent,
    // StateEditComponent,
    // StateFormComponent,
    // StateInsertComponent,
    // StateShowComponent,
    // StateTableComponent,
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
