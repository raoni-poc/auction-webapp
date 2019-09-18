import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserHttpService} from '../../../user/service/user-http.service';
import {CompanyHttpService} from '../../../company/service/company-http.service';
import {MustMatch} from '../../../../validators/must-match.validator.js';
import userFieldOptions from '../../../user/user-form/user-fields-options.js';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent {

  step = 2;
  userForm: FormGroup;
  errors = {};
  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

  constructor(public userHttp: UserHttpService,
              private companyHttp: CompanyHttpService,
              private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: [null, [
        Validators.required,
        Validators.maxLength(userFieldOptions.name.validationMessage.maxlength),
        Validators.minLength(userFieldOptions.name.validationMessage.minlength)
      ]
      ],
      email: [null, [
        Validators.required,
        Validators.maxLength(userFieldOptions.email.validationMessage.maxlength),
        Validators.minLength(userFieldOptions.email.validationMessage.minlength)
      ]
      ],
      password: [null, [
        Validators.required,
        Validators.minLength(userFieldOptions.password.validationMessage.minlength)
      ]
      ],
      repassword: [null, [
        Validators.required
      ]
      ],
    }, {validator: MustMatch('password', 'repassword')});
  }

  goToCompanyForm() {
    this.step = 1;
  }

  goToUserForm() {
    this.step = 2;
  }

  canShowCompanyForm() {
    return this.step === 1;
  }

  canShowUserForm() {
    return this.step === 2;
  }

  onSubmit() {
    this.userHttp
      .create(this.userForm.value)
      .subscribe((input) => {
        this.userForm.reset({
          name: null,
          email: null,
          password: null,
          repassword: null
        });
        this.onSuccess.emit(input);
      }, responseError => {
        // if (responseError.status === 422) {
        this.errors = responseError.error.errors;
        // }
        this.onError.emit(responseError);
      });
  }

  showErrors() {
    return Object.keys(this.errors).length != 0;
  }
}
