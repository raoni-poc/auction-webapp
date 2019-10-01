import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {FormComponent} from '../../common/abstract/form.component';
import cityFieldOptions from '../city-fields-options';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.css']
})
export class CityFormComponent extends FormComponent {

  static makeForm(formBuild: FormBuilder) {
    const o = cityFieldOptions;
    return formBuild.group({
      ibge_code: [(new Date().getTime()), [
        Validators.required,
        Validators.minLength(o.ibge_code.validationMessage.minlength),
        Validators.maxLength(o.ibge_code.validationMessage.maxlength)
      ]],
      name: ['Cidade ' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(o.name.validationMessage.minlength),
        Validators.maxLength(o.name.validationMessage.maxlength)
      ]],
      state_id: [null, [
        Validators.required,
        Validators.min(o.state_id.validationMessage.min),
      ]]
    });
  }

  get fieldOptions(): any {
    return cityFieldOptions;
  }

}
