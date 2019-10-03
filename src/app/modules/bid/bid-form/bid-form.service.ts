import {Injectable} from '@angular/core';
import {FieldsOptions} from '../../common/abstract/fields-options';
import {Validators} from '@angular/forms';
import {FormService} from '../../common/abstract/form.service';

@Injectable({
  providedIn: 'root'
})
export class BidFormService extends FormService {
  fieldOptions(): FieldsOptions {
    return {
      value: {
        id: 'value',
        label: 'Valor',
        placeholder: 'Digite o valor do lance.',
        min: 1,
      },
      offer_id: {
        id: 'offer_id',
        label: 'Oferta',
        placeholder: 'Escolha a oferta do lance',
        min: 1,
      },
    };
  }

  hydrate(model, form) {
    form.get('value').setValue(model.value);
    form.get('offer_id').setValue(model.offer_id);
    return form;
  }

  make() {
    const o = this.fieldOptions();
    return this.formBuilder.group({
      value: [null, [
        Validators.required,
        Validators.min(o.value.min)
      ]],
      offer_id: [1, [
        Validators.required,
        Validators.min(o.offer_id.min)
      ]]
    });
  }

  reset(form) {
    form.get('value').setValue(null);
    form.get('offer_id').setValue(null);
    return form;
  }
}
