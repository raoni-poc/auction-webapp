import {Injectable} from '@angular/core';
import {FieldsOptions} from '../../common/abstract/fields-options';
import {Validators} from '@angular/forms';
import {FormService} from '../../common/abstract/form.service';

@Injectable({
  providedIn: 'root'
})
export class AddressFormService extends FormService {
  fieldOptions(): FieldsOptions {
    return {
      city_id: {
        id: 'city_id',
        label: 'Cidade',
      },
      number: {
        id: 'number',
        label: 'Número',
        placeholder: 'Digite o Número'
      },
      zip_code: {
        id: 'zip_code',
        label: 'CEP',
        placeholder: 'Digite o CEP'
      },
      neighborhood: {
        id: 'neighborhood',
        label: 'Bairro',
        placeholder: 'Digite o Bairro',
      },
      complement: {
        id: 'complement',
        label: 'Complemento',
        placeholder: 'Digite um complemento de endereço'
      },
      note: {
        id: 'note',
        label: 'Nota',
        placeholder: 'Alguma observação sobre o endereço?'
      },
      address: {
        id: 'address',
        label: 'Endereço',
        placeholder: 'Digite o Endereço',
        minlength: 5
      }
    };
  }

  hydrate(model, form) {
    form.get('city_id').setValue(model.city_id);
    form.get('number').setValue(model.number);
    form.get('zip_code').setValue(model.zip_code);
    form.get('neighborhood').setValue(model.neighborhood);
    form.get('complement').setValue(model.complement);
    form.get('note').setValue(model.note);
    form.get('address').setValue(model.address);
    return form;
  }

  make() {
    const o = this.fieldOptions();
    return this.formBuilder.group({
      city_id: [null, [
        Validators.required,
        Validators.min(1)
      ]],
      number: [null, []],
      zip_code: [null, []],
      neighborhood: [null, []],
      complement: [null, []],
      note: [null, []],
      address: [null, [
        Validators.required,
        Validators.minLength(o.address.minlength)
      ]],
    });
  }

  reset(form) {
    form.get('city_id').setValue(null);
    form.get('number').setValue(null);
    form.get('zip_code').setValue(null);
    form.get('neighborhood').setValue(null);
    form.get('complement').setValue(null);
    form.get('note').setValue(null);
    form.get('address').setValue(null);
    return form;
  }
}
