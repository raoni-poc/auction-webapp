import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {FormComponent} from '../../common/abstract/form.component';
import offerFieldOptions from '../offer-fields-options';

@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.component.html',
  styleUrls: ['./offer-form.component.css']
})
export class OfferFormComponent extends FormComponent {
  static makeForm(formBuild: FormBuilder) {
    const o = offerFieldOptions;
    const form = formBuild.group({
      route_id: ['Empresa ' + (new Date().getTime()), [
        Validators.required,
      ]],
      cargo_id: ['Nome Fantasia' + (new Date().getTime()), [
        Validators.required,
      ]],
      offer_type_id: ['Nome Fantasia' + (new Date().getTime()), [
        Validators.required,
      ]],
      start_price: ['Nome Fantasia' + (new Date().getTime()), [
        Validators.required,
      ]],
      description: ['Nome Fantasia' + (new Date().getTime()), [
        Validators.required,
      ]]
    });
  }

  get fieldOptions(): any {
    return offerFieldOptions;
  }
}
