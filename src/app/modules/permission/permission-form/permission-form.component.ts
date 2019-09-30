import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import companyFieldOptions from '../../company/company-fields-options';
import {FormComponent} from '../../common/abstract/form.component';

@Component({
  selector: 'app-permission-form',
  templateUrl: './permission-form.component.html',
  styleUrls: ['./permission-form.component.css']
})
export class PermissionFormComponent extends FormComponent {

  static makeForm(formBuild: FormBuilder) {
    const o = companyFieldOptions;
    return formBuild.group({
      name: ['Permissão ' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(o.name.validationMessage.minlength),
        Validators.maxLength(o.name.validationMessage.maxlength)
      ]],
      guard_name: ['guard_' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(o.guard_name.validationMessage.minlength),
        Validators.maxLength(o.guard_name.validationMessage.maxlength)
      ]]
    });
  }

  get fieldOptions(): any {
    return companyFieldOptions;
  }
}
