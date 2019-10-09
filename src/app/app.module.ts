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
import {AccountStatusDestroyComponent} from './modules/account-status/account-status-destroy/account-status-destroy.component';
import {AccountStatusEditComponent} from './modules/account-status/account-status-edit/account-status-edit.component';
import {AccountStatusFormComponent} from './modules/account-status/account-status-form/account-status-form.component';
import {AccountStatusInsertComponent} from './modules/account-status/account-status-insert/account-status-insert.component';
import {AccountStatusShowComponent} from './modules/account-status/account-status-show/account-status-show.component';
import {AccountStatusTableComponent} from './modules/account-status/account-status-table/account-status-table.component';
import {CityFormComponent} from './modules/city/city-form/city-form.component';
import {BidEditComponent} from './modules/bid/bid-edit/bid-edit.component';
import {BidFormComponent} from './modules/bid/bid-form/bid-form.component';
import {BidShowComponent} from './modules/bid/bid-show/bid-show.component';
import {BidDestroyComponent} from './modules/bid/bid-destroy/bid-destroy.component';
import {BidInsertComponent} from './modules/bid/bid-insert/bid-insert.component';
import {CargoFormComponent} from './modules/cargo/cargo-form/cargo-form.component';
import {CargoEditComponent} from './modules/cargo/cargo-edit/cargo-edit.component';
import {CargoDestroyComponent} from './modules/cargo/cargo-destroy/cargo-destroy.component';
import {CargoInsertComponent} from './modules/cargo/cargo-insert/cargo-insert.component';
import {CargoShowComponent} from './modules/cargo/cargo-show/cargo-show.component';
import {CargoTableComponent} from './modules/cargo/cargo-table/cargo-table.component';
import {CityDestroyComponent} from './modules/city/city-destroy/city-destroy.component';
import {CityInsertComponent} from './modules/city/city-insert/city-insert.component';
import {CityEditComponent} from './modules/city/city-edit/city-edit.component';
import {CityShowComponent} from './modules/city/city-show/city-show.component';
import {CityTableComponent} from './modules/city/city-table/city-table.component';
import {CountryDestroyComponent} from './modules/country/country-destroy/country-destroy.component';
import {CountryEditComponent} from './modules/country/country-edit/country-edit.component';
import {CountryFormComponent} from './modules/country/country-form/country-form.component';
import {CountryInsertComponent} from './modules/country/country-insert/country-insert.component';
import {CountryShowComponent} from './modules/country/country-show/country-show.component';
import {CountryTableComponent} from './modules/country/country-table/country-table.component';
import {DocumentDestroyComponent} from './modules/document/document-destroy/document-destroy.component';
import {DocumentEditComponent} from './modules/document/document-edit/document-edit.component';
import {DocumentFormComponent} from './modules/document/document-form/document-form.component';
import {DocumentInsertComponent} from './modules/document/document-insert/document-insert.component';
import {DocumentShowComponent} from './modules/document/document-show/document-show.component';
import {DocumentTableComponent} from './modules/document/document-table/document-table.component';
import {DocumentTypeDestroyComponent} from './modules/document-type/document-type-destroy/document-type-destroy.component';
import {DocumentTypeEditComponent} from './modules/document-type/document-type-edit/document-type-edit.component';
import {DocumentTypeFormComponent} from './modules/document-type/document-type-form/document-type-form.component';
import {DocumentTypeInsertComponent} from './modules/document-type/document-type-insert/document-type-insert.component';
import {DocumentTypeShowComponent} from './modules/document-type/document-type-show/document-type-show.component';
import {DocumentTypeTableComponent} from './modules/document-type/document-type-table/document-type-table.component';
import {OfferTypeDestroyComponent} from './modules/offer-type/offer-type-destroy/offer-type-destroy.component';
import {OfferTypeFormComponent} from './modules/offer-type/offer-type-form/offer-type-form.component';
import {OfferTypeEditComponent} from './modules/offer-type/offer-type-edit/offer-type-edit.component';
import {OfferTypeInsertComponent} from './modules/offer-type/offer-type-insert/offer-type-insert.component';
import {OfferTypeTableComponent} from './modules/offer-type/offer-type-table/offer-type-table.component';
import {OfferTypeShowComponent} from './modules/offer-type/offer-type-show/offer-type-show.component';
import {OfferDestroyComponent} from './modules/offer/offer-destroy/offer-destroy.component';
import {OfferEditComponent} from './modules/offer/offer-edit/offer-edit.component';
import {OfferFormComponent} from './modules/offer/offer-form/offer-form.component';
import {OfferShowComponent} from './modules/offer/offer-show/offer-show.component';
import {OfferTableComponent} from './modules/offer/offer-table/offer-table.component';
import {OfferInsertComponent} from './modules/offer/offer-insert/offer-insert.component';
import {PermissionInsertComponent} from './modules/permission/permission-insert/permission-insert.component';
import {PermissionShowComponent} from './modules/permission/permission-show/permission-show.component';
import {PermissionEditComponent} from './modules/permission/permission-edit/permission-edit.component';
import {PermissionDestroyComponent} from './modules/permission/permission-destroy/permission-destroy.component';
import {PermissionFormComponent} from './modules/permission/permission-form/permission-form.component';
import {PermissionTableComponent} from './modules/permission/permission-table/permission-table.component';
import {RequirementDestroyComponent} from './modules/requirement/requirement-destroy/requirement-destroy.component';
import {RequirementEditComponent} from './modules/requirement/requirement-edit/requirement-edit.component';
import {RequirementFormComponent} from './modules/requirement/requirement-form/requirement-form.component';
import {RequirementInsertComponent} from './modules/requirement/requirement-insert/requirement-insert.component';
import {RequirementShowComponent} from './modules/requirement/requirement-show/requirement-show.component';
import {RequirementTableComponent} from './modules/requirement/requirement-table/requirement-table.component';
import {RequirementTypeDestroyComponent} from './modules/requirement-type/requirement-type-destroy/requirement-type-destroy.component';
import {RequirementTypeEditComponent} from './modules/requirement-type/requirement-type-edit/requirement-type-edit.component';
import {RequirementTypeFormComponent} from './modules/requirement-type/requirement-type-form/requirement-type-form.component';
import {RoleEditComponent} from './modules/role/role-edit/role-edit.component';
import {RequirementTypeInsertComponent} from './modules/requirement-type/requirement-type-insert/requirement-type-insert.component';
import {RoleInsertComponent} from './modules/role/role-insert/role-insert.component';
import {RequirementTypeShowComponent} from './modules/requirement-type/requirement-type-show/requirement-type-show.component';
import {RequirementTypeTableComponent} from './modules/requirement-type/requirement-type-table/requirement-type-table.component';
import {RoleDestroyComponent} from './modules/role/role-destroy/role-destroy.component';
import {RoleFormComponent} from './modules/role/role-form/role-form.component';
import {RoleShowComponent} from './modules/role/role-show/role-show.component';
import {RoleTableComponent} from './modules/role/role-table/role-table.component';
import {RouteInsertComponent} from './modules/route/route-insert/route-insert.component';
import {RouteShowComponent} from './modules/route/route-show/route-show.component';
import {RouteTableComponent} from './modules/route/route-table/route-table.component';
import {RouteFormComponent} from './modules/route/route-form/route-form.component';
import {RouteDestroyComponent} from './modules/route/route-destroy/route-destroy.component';
import {RouteEditComponent} from './modules/route/route-edit/route-edit.component';
import {UserShowComponent} from './modules/user/user-show/user-show.component';
import {UserDestroyComponent} from './modules/user/user-destroy/user-destroy.component';
import {UserEditComponent} from './modules/user/user-edit/user-edit.component';
import {UserInsertComponent} from './modules/user/user-insert/user-insert.component';
import {UserTableComponent} from './modules/user/user-table/user-table.component';
import {StateDestroyComponent} from './modules/state/state-destroy/state-destroy.component';
import {StateEditComponent} from './modules/state/state-edit/state-edit.component';
import {StateFormComponent} from './modules/state/state-form/state-form.component';
import {StateInsertComponent} from './modules/state/state-insert/state-insert.component';
import {StateShowComponent} from './modules/state/state-show/state-show.component';
import {StateTableComponent} from './modules/state/state-table/state-table.component';
import {UserFormComponent} from './modules/user/user-form/user-form.component';
import {AddressDestroyComponent} from './modules/address/address-drestroy/address-destroy.component';
import {AddressEditComponent} from './modules/address/address-edit/address-edit.component';
import {AddressFormComponent} from './modules/address/address-form/address-form.component';
import {AddressInsertComponent} from './modules/address/address-insert/address-insert.component';
import {AddressShowComponent} from './modules/address/address-show/address-show.component';
import {AddressTableComponent} from './modules/address/address-table/address-table.component';
import {BidTableComponent} from './modules/bid/bid-table/bid-table.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    CardErrorComponent,
    ListErrorComponent,
    FieldErrorComponent,
    NavbarComponent,
    SearchComponent,
    AccountStatusDestroyComponent,
    AccountStatusEditComponent,
    AccountStatusFormComponent,
    AccountStatusInsertComponent,
    AccountStatusShowComponent,
    AccountStatusTableComponent,
    AddressDestroyComponent,
    AddressEditComponent,
    AddressFormComponent,
    AddressInsertComponent,
    AddressShowComponent,
    AddressTableComponent,
    BidEditComponent,
    BidFormComponent,
    BidTableComponent,
    BidShowComponent,
    BidDestroyComponent,
    BidInsertComponent,
    CompanyTableComponent,
    CompanyFormComponent,
    CompanyInsertComponent,
    CompanyShowComponent,
    CompanyEditComponent,
    CompanyDeleteComponent,
    CargoFormComponent,
    CargoEditComponent,
    CargoDestroyComponent,
    CargoInsertComponent,
    CargoShowComponent,
    CargoTableComponent,
    CityDestroyComponent,
    CityEditComponent,
    CityFormComponent,
    CityInsertComponent,
    CityShowComponent,
    CityTableComponent,
    CountryDestroyComponent,
    CountryEditComponent,
    CountryFormComponent,
    CountryInsertComponent,
    CountryShowComponent,
    CountryTableComponent,
    DocumentDestroyComponent,
    DocumentEditComponent,
    DocumentFormComponent,
    DocumentInsertComponent,
    DocumentShowComponent,
    DocumentTableComponent,
    DocumentTypeDestroyComponent,
    DocumentTypeEditComponent,
    DocumentTypeFormComponent,
    DocumentTypeInsertComponent,
    DocumentTypeShowComponent,
    DocumentTypeTableComponent,
    OfferTypeDestroyComponent,
    OfferTypeFormComponent,
    OfferTypeEditComponent,
    OfferTypeInsertComponent,
    OfferTypeTableComponent,
    OfferTypeShowComponent,
    OfferDestroyComponent,
    OfferEditComponent,
    OfferFormComponent,
    OfferShowComponent,
    OfferTableComponent,
    OfferInsertComponent,
    OfferTypeFormComponent,
    PermissionInsertComponent,
    PermissionShowComponent,
    PermissionEditComponent,
    PermissionDestroyComponent,
    PermissionFormComponent,
    PermissionTableComponent,
    RequirementDestroyComponent,
    RequirementEditComponent,
    RequirementFormComponent,
    RequirementInsertComponent,
    RequirementShowComponent,
    RequirementTableComponent,
    RequirementTypeDestroyComponent,
    RequirementTypeEditComponent,
    RequirementTypeFormComponent,
    RequirementTypeInsertComponent,
    RequirementTypeShowComponent,
    RequirementTypeTableComponent,
    RoleDestroyComponent,
    RoleEditComponent,
    RoleFormComponent,
    RoleInsertComponent,
    RoleShowComponent,
    RoleTableComponent,
    RouteInsertComponent,
    RouteShowComponent,
    RouteTableComponent,
    RouteDestroyComponent,
    RouteEditComponent,
    RouteFormComponent,
    UserDestroyComponent,
    UserInsertComponent,
    UserShowComponent,
    UserEditComponent,
    UserTableComponent,
    UserFormComponent,
    StateDestroyComponent,
    StateEditComponent,
    StateFormComponent,
    StateInsertComponent,
    StateShowComponent,
    StateTableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    Select2Module,
    BrowserAnimationsModule,
    NgSelectModule,
  ],
  exports: [AppComponent, CardErrorComponent, FieldErrorComponent],
  entryComponents: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
