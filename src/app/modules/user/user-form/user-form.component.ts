import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {FormComponent} from '../../common/abstract/form.component';
import userFieldOptions from '../user-fields-options';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent extends FormComponent {
  static makeForm(formBuild: FormBuilder) {
    const o = userFieldOptions;
    return formBuild.group({
      name: ['Empresa ' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(o.name.validationMessage.minlength),
        Validators.maxLength(o.name.validationMessage.maxlength)
      ]],
      email: ['Nome Fantasia' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(o.email.validationMessage.minlength),
        Validators.maxLength(o.email.validationMessage.maxlength)
      ]],
      password: ['12345678', [
        Validators.required,
        Validators.minLength(o.password.validationMessage.minlength),
        Validators.maxLength(o.password.validationMessage.maxlength)
      ]]
    });
  }

  get fieldOptions(): any {
    return userFieldOptions;
  }
}
