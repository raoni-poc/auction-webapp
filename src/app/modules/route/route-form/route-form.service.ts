import {Injectable} from '@angular/core';
import {FieldsOptions} from '../../common/abstract/fields-options';
import {Validators} from '@angular/forms';
import {FormService} from '../../common/abstract/form.service';

@Injectable({
  providedIn: 'root'
})
export class RouteFormService extends FormService {
  fieldOptions(): FieldsOptions {
    return {
      address_origin_id: {
        id: 'address_origin_id',
        label: 'Origem',
        min: 1
      },
      address_destination_id: {
        id: 'address_origin_id',
        label: 'Destino',
        min: 1
      },
    };
  }

  hydrate(model, form) {
    form.get('address_origin_id').setValue(model.address_origin_id);
    form.get('address_destination_id').setValue(model.address_destination_id);
    return form;
  }

  make() {
    const o = this.fieldOptions();
    return this.formBuilder.group({
      address_origin_id: ['Regra ' + (new Date().getTime()), [
        Validators.required,
        Validators.min(o.address_origin_id.min)
      ]],
      address_destination_id: ['role_guard_' + (new Date().getTime()), [
        Validators.required,
        Validators.min(o.address_destination_id.min)
      ]]
    });
  }

  reset(form) {
    form.get('address_origin_id').setValue(null);
    form.get('address_destination_id').setValue(null);
    return form;
  }
}
