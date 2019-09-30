import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {FormComponent} from '../../common/abstract/form.component';
import stateFieldOptions from '../state-fileds-options';

@Component({
  selector: 'app-state-form',
  templateUrl: './state-form.component.html',
  styleUrls: ['./state-form.component.css']
})
export class StateFormComponent extends FormComponent {
  static makeForm(formBuild: FormBuilder) {
    const o = stateFieldOptions;
    return formBuild.group({
      name: ['Estado ' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(o.name.validationMessage.minlength),
        Validators.maxLength(o.name.validationMessage.maxlength)
      ]],
      abbreviation: ['ES' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(o.abbreviation.validationMessage.minlength),
        Validators.maxLength(o.abbreviation.validationMessage.maxlength)
      ]]
    });
  }

  get fieldOptions(): any {
    return stateFieldOptions;
  }
}
