import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {FormComponent} from '../../common/abstract/form.component';
import routeFieldOptions from '../route-fields-options';

@Component({
  selector: 'app-route-form',
  templateUrl: './route-form.component.html',
  styleUrls: ['./route-form.component.css']
})
export class RouteFormComponent extends FormComponent {
  static makeForm(formBuild: FormBuilder) {
    const o = routeFieldOptions;
    return formBuild.group({
      address_origin_id: ['Regra ' + (new Date().getTime()), [
        Validators.required,
        Validators.min(o.address_origin_id.validationMessage.min)
      ]],
      address_destination_id: ['role_guard_' + (new Date().getTime()), [
        Validators.required,
        Validators.min(o.address_destination_id.validationMessage.min)
      ]]
    });
  }

  get fieldOptions(): any {
    return routeFieldOptions;
  }
}
