import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {CompanyTableComponent} from './modules/company/company-table/company-table.component';
import {CompanyInsertComponent} from './modules/company/company-insert/company-insert.component';
import {CompanyShowComponent} from './modules/company/company-show/company-show.component';
import {CompanyEditComponent} from './modules/company/company-edit/company-edit.component';
import {CompanyDeleteComponent} from './modules/company/company-delete/company-delete.component';
import {AccountStatusTableComponent} from './modules/account-status/account-status-table/account-status-table.component';
import {AccountStatusInsertComponent} from './modules/account-status/account-status-insert/account-status-insert.component';
import {AccountStatusShowComponent} from './modules/account-status/account-status-show/account-status-show.component';
import {AccountStatusEditComponent} from './modules/account-status/account-status-edit/account-status-edit.component';
import {AccountStatusDestroyComponent} from './modules/account-status/account-status-destroy/account-status-destroy.component';
import {AddressTableComponent} from './modules/address/address-table/address-table.component';
import {AddressInsertComponent} from './modules/address/address-insert/address-insert.component';
import {AddressShowComponent} from './modules/address/address-show/address-show.component';
import {AddressEditComponent} from './modules/address/address-edit/address-edit.component';
import {AddressDestroyComponent} from './modules/address/address-drestroy/address-destroy.component';
import {UserDestroyComponent} from './modules/user/user-destroy/user-destroy.component';
import {UserEditComponent} from './modules/user/user-edit/user-edit.component';
import {UserShowComponent} from './modules/user/user-show/user-show.component';
import {UserInsertComponent} from './modules/user/user-insert/user-insert.component';
import {UserTableComponent} from './modules/user/user-table/user-table.component';
import {StateDestroyComponent} from './modules/state/state-destroy/state-destroy.component';
import {StateEditComponent} from './modules/state/state-edit/state-edit.component';
import {StateShowComponent} from './modules/state/state-show/state-show.component';
import {StateInsertComponent} from './modules/state/state-insert/state-insert.component';
import {StateTableComponent} from './modules/state/state-table/state-table.component';
import {RouteDestroyComponent} from './modules/route/route-destroy/route-destroy.component';
import {RouteEditComponent} from './modules/route/route-edit/route-edit.component';
import {RouteShowComponent} from './modules/route/route-show/route-show.component';
import {RouteInsertComponent} from './modules/route/route-insert/route-insert.component';
import {RouteTableComponent} from './modules/route/route-table/route-table.component';
import {RoleDestroyComponent} from './modules/role/role-destroy/role-destroy.component';
import {RoleEditComponent} from './modules/role/role-edit/role-edit.component';
import {RoleShowComponent} from './modules/role/role-show/role-show.component';
import {RoleInsertComponent} from './modules/role/role-insert/role-insert.component';
import {RoleTableComponent} from './modules/role/role-table/role-table.component';
import {RequirementTypeDestroyComponent} from './modules/requirement-type/requirement-type-destroy/requirement-type-destroy.component';
import {RequirementTypeEditComponent} from './modules/requirement-type/requirement-type-edit/requirement-type-edit.component';
import {RequirementTypeShowComponent} from './modules/requirement-type/requirement-type-show/requirement-type-show.component';
import {RequirementTypeInsertComponent} from './modules/requirement-type/requirement-type-insert/requirement-type-insert.component';
import {RequirementTypeTableComponent} from './modules/requirement-type/requirement-type-table/requirement-type-table.component';
import {RequirementDestroyComponent} from './modules/requirement/requirement-destroy/requirement-destroy.component';
import {RequirementEditComponent} from './modules/requirement/requirement-edit/requirement-edit.component';
import {RequirementShowComponent} from './modules/requirement/requirement-show/requirement-show.component';
import {RequirementInsertComponent} from './modules/requirement/requirement-insert/requirement-insert.component';
import {RequirementTableComponent} from './modules/requirement/requirement-table/requirement-table.component';
import {PermissionDestroyComponent} from './modules/permission/permission-destroy/permission-destroy.component';
import {PermissionEditComponent} from './modules/permission/permission-edit/permission-edit.component';
import {PermissionShowComponent} from './modules/permission/permission-show/permission-show.component';
import {PermissionInsertComponent} from './modules/permission/permission-insert/permission-insert.component';
import {PermissionTableComponent} from './modules/permission/permission-table/permission-table.component';
import {OfferTypeDestroyComponent} from './modules/offer-type/offer-type-destroy/offer-type-destroy.component';
import {OfferTypeEditComponent} from './modules/offer-type/offer-type-edit/offer-type-edit.component';
import {OfferTypeShowComponent} from './modules/offer-type/offer-type-show/offer-type-show.component';
import {OfferTypeInsertComponent} from './modules/offer-type/offer-type-insert/offer-type-insert.component';
import {OfferTypeTableComponent} from './modules/offer-type/offer-type-table/offer-type-table.component';
import {OfferDestroyComponent} from './modules/offer/offer-destroy/offer-destroy.component';
import {OfferEditComponent} from './modules/offer/offer-edit/offer-edit.component';
import {OfferShowComponent} from './modules/offer/offer-show/offer-show.component';
import {OfferInsertComponent} from './modules/offer/offer-insert/offer-insert.component';
import {OfferTableComponent} from './modules/offer/offer-table/offer-table.component';
import {DocumentTypeDestroyComponent} from './modules/document-type/document-type-destroy/document-type-destroy.component';
import {DocumentTypeEditComponent} from './modules/document-type/document-type-edit/document-type-edit.component';
import {DocumentTypeShowComponent} from './modules/document-type/document-type-show/document-type-show.component';
import {DocumentTypeInsertComponent} from './modules/document-type/document-type-insert/document-type-insert.component';
import {DocumentTypeTableComponent} from './modules/document-type/document-type-table/document-type-table.component';
import {DocumentDestroyComponent} from './modules/document/document-destroy/document-destroy.component';
import {DocumentEditComponent} from './modules/document/document-edit/document-edit.component';
import {DocumentShowComponent} from './modules/document/document-show/document-show.component';
import {DocumentInsertComponent} from './modules/document/document-insert/document-insert.component';
import {DocumentTableComponent} from './modules/document/document-table/document-table.component';
import {CityDestroyComponent} from './modules/city/city-destroy/city-destroy.component';
import {CityEditComponent} from './modules/city/city-edit/city-edit.component';
import {CityShowComponent} from './modules/city/city-show/city-show.component';
import {CityInsertComponent} from './modules/city/city-insert/city-insert.component';
import {CityTableComponent} from './modules/city/city-table/city-table.component';
import {CargoDestroyComponent} from './modules/cargo/cargo-destroy/cargo-destroy.component';
import {CargoEditComponent} from './modules/cargo/cargo-edit/cargo-edit.component';
import {CargoShowComponent} from './modules/cargo/cargo-show/cargo-show.component';
import {CargoInsertComponent} from './modules/cargo/cargo-insert/cargo-insert.component';
import {CargoTableComponent} from './modules/cargo/cargo-table/cargo-table.component';
import {BidDestroyComponent} from './modules/bid/bid-destroy/bid-destroy.component';
import {BidEditComponent} from './modules/bid/bid-edit/bid-edit.component';
import {BidShowComponent} from './modules/bid/bid-show/bid-show.component';
import {BidInsertComponent} from './modules/bid/bid-insert/bid-insert.component';
import {BidTableComponent} from './modules/bid/bid-table/bid-table.component';
import {CountryTableComponent} from './modules/country/country-table/country-table.component';
import {CountryInsertComponent} from './modules/country/country-insert/country-insert.component';
import {CountryShowComponent} from './modules/country/country-show/country-show.component';
import {CountryEditComponent} from './modules/country/country-edit/country-edit.component';
import {CountryDestroyComponent} from './modules/country/country-destroy/country-destroy.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  // *******************************
  {
    path: 'account-status',
    component: AccountStatusTableComponent,
  },
  {
    path: 'account-status/new',
    component: AccountStatusInsertComponent,
  },
  {
    path: 'account-status/:id',
    component: AccountStatusShowComponent,
  },
  {
    path: 'account-status/edit/:id',
    component: AccountStatusEditComponent,
  },
  {
    path: 'account-status/delete/:id',
    component: AccountStatusDestroyComponent,
  },
  // *******************************
  {
    path: 'address',
    component: AddressTableComponent,
  },
  {
    path: 'address/new',
    component: AddressInsertComponent,
  },
  {
    path: 'address/:id',
    component: AddressShowComponent,
  },
  {
    path: 'address/edit/:id',
    component: AddressEditComponent,
  },
  {
    path: 'address/delete/:id',
    component: AddressDestroyComponent,
  },
  // *******************************
  {
    path: 'bid',
    component: BidTableComponent,
  },
  {
    path: 'bid/new',
    component: BidInsertComponent,
  },
  {
    path: 'bid/:id',
    component: BidShowComponent,
  },
  {
    path: 'bid/edit/:id',
    component: BidEditComponent,
  },
  {
    path: 'bid/delete/:id',
    component: BidDestroyComponent,
  },
  // *******************************
  {
    path: 'cargo',
    component: CargoTableComponent,
  },
  {
    path: 'cargo/new',
    component: CargoInsertComponent,
  },
  {
    path: 'cargo/:id',
    component: CargoShowComponent,
  },
  {
    path: 'cargo/edit/:id',
    component: CargoEditComponent,
  },
  {
    path: 'cargo/delete/:id',
    component: CargoDestroyComponent,
  },
  // *******************************
  {
    path: 'city',
    component: CityTableComponent,
  },
  {
    path: 'city/new',
    component: CityInsertComponent,
  },
  {
    path: 'city/:id',
    component: CityShowComponent,
  },
  {
    path: 'city/edit/:id',
    component: CityEditComponent,
  },
  {
    path: 'city/delete/:id',
    component: CityDestroyComponent,
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
  {
    path: 'country',
    component: CountryTableComponent,
  },
  {
    path: 'country/new',
    component: CountryInsertComponent,
  },
  {
    path: 'country/:id',
    component: CountryShowComponent,
  },
  {
    path: 'country/edit/:id',
    component: CountryEditComponent,
  },
  {
    path: 'country/delete/:id',
    component: CountryDestroyComponent,
  },
  // *******************************
  {
    path: 'document',
    component: DocumentTableComponent,
  },
  {
    path: 'document/new',
    component: DocumentInsertComponent,
  },
  {
    path: 'document/:id',
    component: DocumentShowComponent,
  },
  {
    path: 'document/edit/:id',
    component: DocumentEditComponent,
  },
  {
    path: 'document/delete/:id',
    component: DocumentDestroyComponent,
  },
  // *******************************
  {
    path: 'document-type',
    component: DocumentTypeTableComponent,
  },
  {
    path: 'document-type/new',
    component: DocumentTypeInsertComponent,
  },
  {
    path: 'document-type/:id',
    component: DocumentTypeShowComponent,
  },
  {
    path: 'document-type/edit/:id',
    component: DocumentTypeEditComponent,
  },
  {
    path: 'document-type/delete/:id',
    component: DocumentTypeDestroyComponent,
  },
  // *******************************
  {
    path: 'offer',
    component: OfferTableComponent,
  },
  {
    path: 'offer/new',
    component: OfferInsertComponent,
  },
  {
    path: 'offer/:id',
    component: OfferShowComponent,
  },
  {
    path: 'offer/edit/:id',
    component: OfferEditComponent,
  },
  {
    path: 'offer/delete/:id',
    component: OfferDestroyComponent,
  },
  // *******************************
  {
    path: 'offer-type',
    component: OfferTypeTableComponent,
  },
  {
    path: 'offer-type/new',
    component: OfferTypeInsertComponent,
  },
  {
    path: 'offer-type/:id',
    component: OfferTypeShowComponent,
  },
  {
    path: 'offer-type/edit/:id',
    component: OfferTypeEditComponent,
  },
  {
    path: 'offer-type/delete/:id',
    component: OfferTypeDestroyComponent,
  },
  // *******************************
  {
    path: 'permission',
    component: PermissionTableComponent,
  },
  {
    path: 'permission/new',
    component: PermissionInsertComponent,
  },
  {
    path: 'permission/:id',
    component: PermissionShowComponent,
  },
  {
    path: 'permission/edit/:id',
    component: PermissionEditComponent,
  },
  {
    path: 'permission/delete/:id',
    component: PermissionDestroyComponent,
  },
  // *******************************
  {
    path: 'requirement',
    component: RequirementTableComponent,
  },
  {
    path: 'requirement/new',
    component: RequirementInsertComponent,
  },
  {
    path: 'requirement/:id',
    component: RequirementShowComponent,
  },
  {
    path: 'requirement/edit/:id',
    component: RequirementEditComponent,
  },
  {
    path: 'requirement/delete/:id',
    component: RequirementDestroyComponent,
  },
  // *******************************
  {
    path: 'requirement-type',
    component: RequirementTypeTableComponent,
  },
  {
    path: 'requirement-type/new',
    component: RequirementTypeInsertComponent,
  },
  {
    path: 'requirement-type/:id',
    component: RequirementTypeShowComponent,
  },
  {
    path: 'requirement-type/edit/:id',
    component: RequirementTypeEditComponent,
  },
  {
    path: 'requirement-type/delete/:id',
    component: RequirementTypeDestroyComponent,
  },
  // *******************************
  {
    path: 'role',
    component: RoleTableComponent,
  },
  {
    path: 'role/new',
    component: RoleInsertComponent,
  },
  {
    path: 'role/:id',
    component: RoleShowComponent,
  },
  {
    path: 'role/edit/:id',
    component: RoleEditComponent,
  },
  {
    path: 'role/delete/:id',
    component: RoleDestroyComponent,
  },
  // *******************************
  {
    path: 'route',
    component: RouteTableComponent,
  },
  {
    path: 'route/new',
    component: RouteInsertComponent,
  },
  {
    path: 'route/:id',
    component: RouteShowComponent,
  },
  {
    path: 'route/edit/:id',
    component: RouteEditComponent,
  },
  {
    path: 'route/delete/:id',
    component: RouteDestroyComponent,
  },
  // *******************************
  {
    path: 'state',
    component: StateTableComponent,
  },
  {
    path: 'state/new',
    component: StateInsertComponent,
  },
  {
    path: 'state/:id',
    component: StateShowComponent,
  },
  {
    path: 'state/edit/:id',
    component: StateEditComponent,
  },
  {
    path: 'state/delete/:id',
    component: StateDestroyComponent,
  },
  // *******************************
  {
    path: 'user',
    component: UserTableComponent,
  },
  {
    path: 'user/new',
    component: UserInsertComponent,
  },
  {
    path: 'user/:id',
    component: UserShowComponent,
  },
  {
    path: 'user/edit/:id',
    component: UserEditComponent,
  },
  {
    path: 'user/delete/:id',
    component: UserDestroyComponent,
  },
  // *******************************
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
