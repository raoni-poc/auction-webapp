import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// import {CompanyDeleteComponent} from './company-delete/company-delete.component';
// import {CompanyEditComponent} from './company-edit/company-edit.component';
// import {CompanyFormComponent} from './company-form/company-form.component';
// import {CompanyInsertComponent} from './company-insert/company-insert.component';
import {CompanyListComponent} from './company-list/company-list.component';
// import {CompanyShowComponent} from './company-show/company-show.component';

@NgModule({
  declarations: [
    // CompanyDeleteComponent,
    // CompanyEditComponent,
    // CompanyFormComponent,
    // CompanyInsertComponent,
    CompanyListComponent,
    // CompanyShowComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    //CompanyListComponent,
  ]
})
export class CompanyModule {
}
