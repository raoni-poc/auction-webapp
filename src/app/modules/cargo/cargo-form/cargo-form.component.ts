import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import cargoFieldsOptions from '../cargo-fields-options';
import {FormComponent} from '../../common/abstract/form.component';

@Component({
  selector: 'app-cargo-form',
  templateUrl: './cargo-form.component.html',
  styleUrls: ['./cargo-form.component.css']
})
export class CargoFormComponent extends FormComponent {

  static makeForm(formBuild: FormBuilder) {
    const o = cargoFieldsOptions;
    return formBuild.group({
      cargo: ['Carga ' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(o.cargo.validationMessage.minlength),
        Validators.maxLength(o.cargo.validationMessage.maxlength)
      ]],
      packing: ['Embalagem' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(o.packing.validationMessage.minlength),
        Validators.maxLength(o.packing.validationMessage.maxlength)
      ]],
      description: ['Descrição' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(o.description.validationMessage.minlength),
        Validators.maxLength(o.description.validationMessage.maxlength)
      ]]
    });
  }

  get fieldOptions(): any {
    return cargoFieldsOptions;
  }

}
