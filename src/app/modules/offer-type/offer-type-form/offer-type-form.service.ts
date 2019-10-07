import {Injectable} from '@angular/core';
import {FormService} from '../../common/abstract/form.service';
import {FieldsOptions} from '../../common/abstract/fields-options';
import {Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class OfferTypeFormService extends FormService {
  fieldOptions(): FieldsOptions {
    return {
      name: {
        id: 'name',
        label: 'Nome',
        placeholder: 'Tipo da Oferta.',
        minlength: 3,
        maxlength: 255,
      },
    };
  }

  hydrate(model, form) {
    form.get('name').setValue(model.name);
    return form;
  }

  make() {
    const o = this.fieldOptions();
    return this.formBuilder.group({
      name: ['Tipo de Oferta ' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(o.name.minlength),
        Validators.maxLength(o.name.maxlength)
      ]],
    });
  }

  reset(form) {
    form.get('name').setValue(null);
    return form;
  }
}
