import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import companyFieldOptions from '../company-fields-options';
import {CompanyHttpService} from '../company-http.service';

@Component({
  selector: 'app-company-insert',
  templateUrl: './company-insert.component.html',
  styleUrls: ['./company-insert.component.css']
})
export class CompanyInsertComponent {

  companyForm: FormGroup;
  errors = {};

  constructor(private companyHttp: CompanyHttpService,
              private formBuilder: FormBuilder,
              private router: Router) {
    this.companyForm = this.formBuilder.group({
      name: ['Empresa ' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(companyFieldOptions.name.validationMessage.minlength),
        Validators.maxLength(companyFieldOptions.name.validationMessage.maxlength)
      ]],
      trade_name: ['Nome Fantasia' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(companyFieldOptions.trade_name.validationMessage.minlength),
        Validators.maxLength(companyFieldOptions.trade_name.validationMessage.maxlength)
      ]]
    });
  }

  onSubmit() {
    this.companyHttp
      .create(this.companyForm.value)
      .subscribe((input) => {
        this.companyForm.reset({
          name: null,
          trade_name: null,
        });
        console.log('success'); /* @TODO */
        //this.router.navigate(['/sing-up/success']);
      }, responseError => {
        this.errors = responseError.error.errors;
      });
  }

  showErrors() {
    return Object.keys(this.errors).length !== 0;
  }

}
