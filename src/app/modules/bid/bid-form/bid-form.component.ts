import {Component} from '@angular/core';
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
      value: [null, [
        Validators.required,
        Validators.min(o.value.validationMessage.min)
      ]],
      offer_id: [1, [
        Validators.required,
        Validators.min(o.offer_id.validationMessage.min)
      ]]
    });
  }

  get fieldOptions(): any {
    return bidFieldOptions;
  }

}
