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
import {SearchComponent} from './modules/common/search/search.component';
import {AccountStatusFormComponent} from './modules/account-status/account-status-form/account-status-form.component';
import {BidFormComponent} from './modules/bid/bid-form/bid-form.component';
import {CargoFormComponent} from './modules/cargo/cargo-form/cargo-form.component';
import {CityFormComponent} from './modules/city/city-form/city-form.component';
import {CountryFormComponent} from './modules/country/country-form/country-form.component';
import {DocumentFormComponent} from './modules/document/document-form/document-form.component';
import {DocumentTypeFormComponent} from './modules/document-type/document-type-form/document-type-form.component';
import {OfferFormComponent} from './modules/offer/offer-form/offer-form.component';
import {OfferTypeFormComponent} from './modules/offer-type/offer-type-form/offer-type-form.component';
import {PermissionFormComponent} from './modules/permission/permission-form/permission-form.component';
import {RequirementFormComponent} from './modules/requirement/requirement-form/requirement-form.component';
import {RequirementTypeFormComponent} from './modules/requirement-type/requirement-type-form/requirement-type-form.component';
import {RoleFormComponent} from './modules/role/role-form/role-form.component';
import {RouteFormComponent} from './modules/route/route-form/route-form.component';
import { UserDestroyComponent } from './modules/user/user-destroy/user-destroy.component';
import { UserEditComponent } from './modules/user/user-edit/user-edit.component';
import { UserInsertComponent } from './modules/user/user-insert/user-insert.component';
import { UserShowComponent } from './modules/user/user-show/user-show.component';
import { UserTableComponent } from './modules/user/user-table/user-table.component';


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
    SearchComponent,
    // AccountStatusDestroyComponent,
    // AccountStatusEditComponent,
    AccountStatusFormComponent,
    // AccountStatusInsertComponent,
    // AccountStatusShowComponent,
    // AccountStatusTableComponent,
    BidFormComponent,
    CargoFormComponent,
    // CityDestroyComponent,
    // CityEditComponent,
    CityFormComponent,
    // CityInsertComponent,
    // CityShowComponent,
    // CityTableComponent,
    // CountryDestroyComponent,
    // CountryEditComponent,
    CountryFormComponent,
    // CountryInsertComponent,
    // CountryShowComponent,
    // CountryTableComponent,
    // DocumentDestroyComponent,
    // DocumentEditComponent,
    DocumentFormComponent,
    // DocumentInsertComponent,
    // DocumentShowComponent,
    // DocumentTableComponent,
    // DocumentTypeDestroyComponent,
    // DocumentTypeEditComponent,
    DocumentTypeFormComponent,
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
    OfferFormComponent,
    // OfferShowComponent,
    // OfferTableComponent,
    // OfferInsertComponent,
    OfferTypeFormComponent,
    // PermissionInsertComponent,
    // PermissionShowComponent,
    // PermissionEditComponent,
    // PermissionDestroyComponent,
    PermissionFormComponent,
    // PermissionTableComponent,
    // RequirementDestroyComponent,
    // RequirementEditComponent,
    RequirementFormComponent,
    // RequirementInsertComponent,
    // RequirementShowComponent,
    // RequirementTableComponent,
    // RequirementTypeDestroyComponent,
    // RequirementTypeEditComponent,
    RequirementTypeFormComponent,
    // RequirementTypeInsertComponent,
    // RequirementTypeShowComponent,
    // RequirementTypeTableComponent,
    // RoleDestroyComponent,
    // RoleEditComponent,
    RoleFormComponent,
    // RoleInsertComponent,
    // RoleShowComponent,
    // RoleTableComponent,
    // RouteDestroyComponent,
    // RouteEditComponent,
    RouteFormComponent,
    UserDestroyComponent,
    UserEditComponent,
    UserInsertComponent,
    UserShowComponent,
    UserTableComponent,
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
  exports: [AppComponent, CardErrorComponent, FieldErrorComponent],
  entryComponents: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
