import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {FormComponent} from '../../common/abstract/form.component';
import requirementTypeFieldOptions from '../requirement-type-fields-options';

@Component({
  selector: 'app-requirement-type-form',
  templateUrl: './requirement-type-form.component.html',
  styleUrls: ['./requirement-type-form.component.css']
})
export class RequirementTypeFormComponent extends FormComponent {
  static makeForm(formBuild: FormBuilder) {
    const o = requirementTypeFieldOptions;
    return formBuild.group({
      name: ['Empresa ' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(o.name.validationMessage.minlength),
        Validators.maxLength(o.name.validationMessage.maxlength)
      ]]
    });
  }

  get fieldOptions(): any {
    return requirementTypeFieldOptions;
  }
}
