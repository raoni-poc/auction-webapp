import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import companyFieldOptions from '../../company/company-fields-options';
import {FormComponent} from '../../common/abstract/form.component';

@Component({
  selector: 'app-offer-type-form',
  templateUrl: './offer-type-form.component.html',
  styleUrls: ['./offer-type-form.component.css']
})
export class OfferTypeFormComponent extends FormComponent {
  static makeForm(formBuild: FormBuilder) {
    const o = companyFieldOptions;
    return formBuild.group({
      name: ['Empresa ' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(o.name.validationMessage.minlength),
        Validators.maxLength(o.name.validationMessage.maxlength)
      ]],
    });
  }

  get fieldOptions(): any {
    return companyFieldOptions;
  }
}
