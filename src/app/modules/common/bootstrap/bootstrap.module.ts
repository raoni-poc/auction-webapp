import {NgModule} from '@angular/core';
import {AlertErrorComponent} from './alert-error/alert-error.component';
import {CardErrorComponent} from './card-error/card-error.component';
import {CardSuccessComponent} from './card-success/card-success.component';
import {FieldErrorComponent} from './field-error/field-error.component';
import {ListErrorComponent} from './list-error/list-error.component';
import {ModalComponent} from './modal/modal.component';
import {NavbarComponent} from './navbar/navbar.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AlertErrorComponent,
    CardErrorComponent,
    CardSuccessComponent,
    FieldErrorComponent,
    ListErrorComponent,
    ModalComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    // RouterModule
  ]
})
export class BootstrapModule {
}
