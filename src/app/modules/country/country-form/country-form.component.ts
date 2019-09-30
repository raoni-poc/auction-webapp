import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {FormComponent} from '../../common/abstract/form.component';
import countryFieldOptions from '../country-fields-options';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.css']
})
export class CountryFormComponent extends FormComponent {

  static makeForm(formBuild: FormBuilder) {
    const o = countryFieldOptions;
    return formBuild.group({
      name: ['Estado ' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(o.name.validationMessage.minlength),
        Validators.maxLength(o.name.validationMessage.maxlength)
      ]],
      abbreviation: ['A' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(o.abbreviation.validationMessage.minlength),
        Validators.maxLength(o.abbreviation.validationMessage.maxlength)
      ]]
    });
  }

  get fieldOptions(): any {
    return countryFieldOptions;
  }

}
