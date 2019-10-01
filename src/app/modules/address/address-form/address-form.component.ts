import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {FormComponent} from '../../common/abstract/form.component';
import addressFieldOptions from '../address-fields-options';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent extends FormComponent {
  static makeForm(formBuild: FormBuilder) {
    const o = addressFieldOptions;
    return formBuild.group({
      city_id: [null, [
        Validators.required,
        Validators.min(1)
      ]],
      number: [null, [
        Validators.required,
        Validators.minLength(o.number.validationMessage.minlength),
        Validators.maxLength(o.number.validationMessage.maxlength)
      ]],
      zip_code: [null, [
        Validators.required,
        Validators.minLength(o.zip_code.validationMessage.minlength),
        Validators.maxLength(o.zip_code.validationMessage.maxlength)
      ]],
      neighborhood: [null, [
        Validators.required,
        Validators.minLength(o.neighborhood.validationMessage.minlength),
        Validators.maxLength(o.neighborhood.validationMessage.maxlength)
      ]],
      complement: [null, [
        Validators.required,
        Validators.minLength(o.complement.validationMessage.minlength),
        Validators.maxLength(o.complement.validationMessage.maxlength)
      ]],
      note: [null, [
        Validators.required,
        Validators.minLength(o.note.validationMessage.minlength),
        Validators.maxLength(o.note.validationMessage.maxlength)
      ]],
      address: [null, [
        Validators.required,
        Validators.minLength(o.address.validationMessage.minlength),
        Validators.maxLength(o.address.validationMessage.maxlength)
      ]],
    });
  }

  get fieldOptions(): any {
    return addressFieldOptions;
  }
}
