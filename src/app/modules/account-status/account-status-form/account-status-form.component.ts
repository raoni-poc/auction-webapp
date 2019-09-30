import {ChangeDetectorRef, Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import accountStatusFieldOptions from '../account-status-fields-options';
import {FormComponent} from '../../common/abstract/form.component';

@Component({
  selector: 'app-account-status-form',
  templateUrl: './account-status-form.component.html',
  styleUrls: ['./account-status-form.component.css']
})
export class AccountStatusFormComponent extends FormComponent{

  static makeForm(formBuild: FormBuilder) {
    const o = accountStatusFieldOptions;
    return formBuild.group({
      name: ['Status' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(o.name.validationMessage.minlength),
        Validators.maxLength(o.name.validationMessage.maxlength)
      ]]
    });
  }

  get fieldOptions(): any {
    return accountStatusFieldOptions;
  }

}
