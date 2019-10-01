import {NgModule} from '@angular/core';
import {AddressDrestroyComponent} from './address-drestroy/address-drestroy.component';
import {AddressEditComponent} from './address-edit/address-edit.component';
import {AddressFormComponent} from './address-form/address-form.component';
import {AddressInsertComponent} from './address-insert/address-insert.component';
import {AddressShowComponent} from './address-show/address-show.component';
import {AddressTableComponent} from './address-table/address-table.component';
import {AppModule} from '../../app.module';

@NgModule({
  declarations: [AddressDrestroyComponent, AddressEditComponent, AddressFormComponent, AddressInsertComponent, AddressShowComponent, AddressTableComponent],
  imports: [
    AppModule
  ]
})
export class AddressModule {
}
