import {Component} from '@angular/core';
import {FormComponent} from '../../common/abstract/form.component';
import {FormBuilder, Validators} from '@angular/forms';
import requirementTypeFieldOptions from '../../requirement-type/requirement-type-fields-options';

@Component({
  selector: 'app-requirement-form',
  templateUrl: './requirement-form.component.html',
  styleUrls: ['./requirement-form.component.css']
})
export class RequirementFormComponent extends FormComponent {
  static makeForm(formBuild: FormBuilder) {
    const o = requirementTypeFieldOptions;
    return formBuild.group({
      name: ['Requisito ' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(o.name.validationMessage.minlength),
        Validators.maxLength(o.name.validationMessage.maxlength)
      ]],
      trade_name: ['Id do tipo' + (new Date().getTime()), [
        Validators.required
      ]]
    });
  }

  get fieldOptions(): any {
    return requirementTypeFieldOptions;
  }
}
