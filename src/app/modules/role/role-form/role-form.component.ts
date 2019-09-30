import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {FormComponent} from '../../common/abstract/form.component';
import roleFieldOptions from '../role-fields-options';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.css']
})
export class RoleFormComponent extends FormComponent {
  static makeForm(formBuild: FormBuilder) {
    const o = roleFieldOptions;
    return formBuild.group({
      name: ['Regra ' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(o.name.validationMessage.minlength),
        Validators.maxLength(o.name.validationMessage.maxlength)
      ]],
      guard_name: ['role_guard_' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(o.guard_name.validationMessage.minlength),
        Validators.maxLength(o.guard_name.validationMessage.maxlength)
      ]]
    });
  }

  get fieldOptions(): any {
    return roleFieldOptions;
  }
}
