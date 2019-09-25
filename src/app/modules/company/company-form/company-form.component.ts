import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import companyFieldOptions from '../company-fields-options';
import {FormComponent} from '../../common/abstract/form.component';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent extends FormComponent {

  static makeForm(formBuild: FormBuilder) {
    const o = companyFieldOptions;
    return formBuild.group({
      name: ['Empresa ' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(o.name.validationMessage.minlength),
        Validators.maxLength(o.name.validationMessage.maxlength)
      ]],
      trade_name: ['Nome Fantasia' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(o.trade_name.validationMessage.minlength),
        Validators.maxLength(o.trade_name.validationMessage.maxlength)
      ]]
    });
  }

  get fieldOptions(): any {
    return companyFieldOptions;
  }
}
