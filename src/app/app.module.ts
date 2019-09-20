import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/pages/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import {NumberFormatBrPipe} from './pipes/number-format-br.pipe';
import {JWT_OPTIONS, JwtModule} from '@auth0/angular-jwt';
import {IsInvalidControlDirective, IsInvalidDirective} from './directives/is-invalid.directive';
import {SignUpComponent} from './components/pages/sign-up/sign-up.component';
import {Select2Module} from 'ng2-select2';
import {SignUpFormComponent} from './components/pages/sign-up/sign-up-form/sign-up-form.component';
import {UserFormComponent} from './components/user/user-form/user-form.component';
import {CompanyFormComponent} from './components/company/company-form/company-form.component';
import {AuthService} from './components/common/auth/auth.service';
import {AlertErrorComponent} from './components/common/bootstrap/alert-error/alert-error.component';
import {ModalComponent} from './components/common/bootstrap/modal/modal.component';
import {NavbarComponent} from './components/common/bootstrap/navbar/navbar.component';
import {SortColumnComponent} from './components/common/sort-column/sort-column.component';
import {FieldErrorComponent} from './components/common/bootstrap/field-error/field-error.component';
import {ListErrorComponent} from './components/common/bootstrap/list-error/list-error.component';
import {CardErrorComponent} from './components/common/bootstrap/card-error/card-error.component';
import {RefreshTokenInterceptorService} from './components/common/refresh-token/refresh-token-interceptor.service';
import {SignUpSuccessComponent} from './pages/sign-up-success/sign-up-success.component';
import {CardSuccessComponent} from './components/common/bootstrap/card-success/card-success.component';
import {EmailVerifyComponent} from './email-verify/email-verify.component';
import {CompanyListComponent} from './components/company/company-list/company-list.component';
import {CompanyInsertComponent} from './components/company/company-insert/company-insert.component';
import {CompanyDeleteComponent} from './components/company/company-delete/company-delete.component';
import {CompanyEditComponent} from './components/company/company-edit/company-edit.component';

function jwtFactory(authService: AuthService) {
  return {
    whitelistedDomains: [
      new RegExp('localhost:8000/*')
    ],
    tokenGetter: () => {
      return authService.getToken();
    }
  };
}

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    AlertErrorComponent,
    ModalComponent,
    NumberFormatBrPipe,
    NavbarComponent,
    SortColumnComponent,
    FieldErrorComponent,
    IsInvalidDirective,
    IsInvalidControlDirective,
    ListErrorComponent,
    CardErrorComponent,
    SignUpFormComponent,
    UserFormComponent,
    CompanyFormComponent,
    SignUpSuccessComponent,
    CardSuccessComponent,
    EmailVerifyComponent,
    CompanyListComponent,
    CompanyInsertComponent,
    CompanyDeleteComponent,
    CompanyEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtFactory,
        deps: [AuthService]
      }
    }),
    ReactiveFormsModule,
    Select2Module
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RefreshTokenInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
