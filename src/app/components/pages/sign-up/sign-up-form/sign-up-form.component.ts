import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserHttpService} from '../../../user/service/user-http.service';
import {CompanyHttpService} from '../../../company/service/company-http.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  step = 1;

  @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
  @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();
  form: FormGroup;

  constructor(public userHttp: UserHttpService,
              private companyHttp: CompanyHttpService,
              private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
    });
  }

  ngOnInit() {
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
    console.log();
  }
}
