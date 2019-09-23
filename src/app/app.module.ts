import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NumberFormatBrPipe} from './pipes/number-format-br.pipe';
import {JWT_OPTIONS, JwtModule} from '@auth0/angular-jwt';
import {IsInvalidControlDirective, IsInvalidDirective} from './directives/is-invalid.directive';
import {SignUpSuccessComponent} from './pages/sign-up-success/sign-up-success.component';
import {EmailVerifyComponent} from './email-verify/email-verify.component';
import {AuthService} from './modules/common/auth/auth.service';
import {RefreshTokenInterceptorService} from './modules/common/refresh-token/refresh-token-interceptor.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {Select2Module} from 'ng2-select2';
import {CompanyModule} from './modules/company/company.module.js';
import {CommonModule} from './modules/common/common.module.js';
import {RouteModule} from './modules/route/route.module.js';


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
    NumberFormatBrPipe,
    IsInvalidDirective,
    IsInvalidControlDirective,
    SignUpSuccessComponent,
    EmailVerifyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    RouteModule,
    Select2Module,
    CommonModule,
    CompanyModule,
    // AccountStatusModule,
    // AddressModule,
    // BidModule,
    // CargoModule,
    // CityModule,
    // CompanyModule,
    // CountryModule,
    // DocumentModule,
    // DocumentTypeModule,
    // LoginModule,
    // OfferModule,
    // OfferTypeModule,
    // PermissionModule,
    // RequirementModule,
    // RequirementTypeModule,
    // RoleModule,

    // SignUpModule,
    // StateModule,
    // UserModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtFactory,
        deps: [AuthService]
      }
    }),
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
