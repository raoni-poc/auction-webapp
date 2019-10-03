import {Injectable} from '@angular/core';
import {FormService} from '../../common/abstract/form.service';
import {FieldsOptions} from '../../common/abstract/fields-options';

@Injectable({
  providedIn: 'root'
})
export class OfferFormService extends FormService {
  fieldOptions(): FieldsOptions {
    return {
      route_id: {
        id: 'route_id',
        label: 'Rota',
      },
      cargo_id: {
        id: 'cargo_id',
        label: 'Carga',
      },
      offer_type_id: {
        id: 'offer_type_id',
        label: 'Tipo',
      },
      start_price: {
        id: 'start_price',
        label: 'Preço'
      },
      description: {
        id: 'description',
        label: 'Descrição'
      }
    };
  }

  hydrate(model, form) {
    form.get('name').setValue(model.route_id);
    form.get('cargo_id').setValue(model.cargo_id);
    form.get('offer_type_id').setValue(model.offer_type_id);
    form.get('start_price').setValue(model.start_price);
    form.get('description').setValue(model.description);
    return form;
  }

  make() {
    const o = this.fieldOptions();
    return this.formBuilder.group({});
  }

  reset(form) {
    form.get('name').setValue(null);
    form.get('cargo_id').setValue(null);
    form.get('offer_type_id').setValue(null);
    form.get('start_price').setValue(null);
    form.get('description').setValue(null);
    return form;
  }
}
