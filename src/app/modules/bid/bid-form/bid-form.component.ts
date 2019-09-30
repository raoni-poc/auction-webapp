import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {FormComponent} from '../../common/abstract/form.component';
import bidFieldOptions from '../bid-fields-options';

@Component({
  selector: 'app-bid-form',
  templateUrl: './bid-form.component.html',
  styleUrls: ['./bid-form.component.css']
})
export class BidFormComponent extends FormComponent {

  static makeForm(formBuild: FormBuilder) {
    const o = bidFieldOptions;
    return formBuild.group({
      value: ['Empresa ' + (new Date().getTime()), [
        Validators.required,
      ]],
      offer_id: ['Nome Fantasia' + (new Date().getTime()), [
        Validators.required,
      ]]
    });
  }

  get fieldOptions(): any {
    return bidFieldOptions;
  }

}
