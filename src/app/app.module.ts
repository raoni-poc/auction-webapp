import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/pages/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {AlertErrorComponent} from './components/bootstrap/alert-error/alert-error.component';
import {ModalComponent} from './components/bootstrap/modal/modal.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {NumberFormatBrPipe} from './pipes/number-format-br.pipe';
import {JWT_OPTIONS, JwtModule} from '@auth0/angular-jwt';
import {AuthService} from './services/auth.service';
import {NavbarComponent} from './components/bootstrap/navbar/navbar.component';
import {RefreshTokenInterceptorService} from './services/refresh-token-interceptor.service';
import {SortColumnComponent} from './components/common/sort-column/sort-column.component';
import {FieldErrorComponent} from './components/bootstrap/field-error/field-error.component';
import {IsInvalidControlDirective, IsInvalidDirective} from './directives/is-invalid.directive';
import {ListErrorComponent} from './components/bootstrap/list-error/list-error.component';
import {CardErrorComponent} from './components/bootstrap/card-error/card-error.component';
import {SignUpComponent} from './components/pages/sign-up/sign-up.component';
import {Select2Module} from 'ng2-select2';
import {SignUpFormComponent} from './components/pages/sign-up/sign-up-form/sign-up-form.component';
import {UserFormComponent} from './components/user/user-form/user-form.component';
import {CompanyFormComponent} from './components/company/company-form/company-form.component';

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
    CompanyFormComponent
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
