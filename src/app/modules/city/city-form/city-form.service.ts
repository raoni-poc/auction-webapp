import {Injectable} from '@angular/core';
import {FieldsOptions} from '../../common/abstract/fields-options';
import {FormService} from '../../common/abstract/form.service';
import {Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CityFormService extends FormService {
  fieldOptions(): FieldsOptions {
    return {
      ibge_code: {
        id: 'ibge_code',
        label: 'Código Ibge',
        placeholder: 'Digite o código Ibge da cidade.',
        min: 1,
        max: 999999999
      },
      name: {
        id: 'name',
        label: 'Status',
        placeholder: 'Digite o status.',
        minlength: 3,
        maxlength: 255
      },
      state_id: {
        id: 'state_id',
        label: 'Estado',
        min: 1,
      },
    };
  }

  hydrate(model, form) {
    form.get('ibge_code').setValue(model.ibge_code);
    form.get('name').setValue(model.name);
    form.get('state_id').setValue(model.state.id);
    return form;
  }

  make() {
    const o = this.fieldOptions();
    return this.formBuilder.group({
      ibge_code: [(new Date().getTime()), [
        Validators.required,
        Validators.min(o.ibge_code.min),
        Validators.max(o.ibge_code.max)
      ]],
      name: ['Cidade ' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(o.name.minlength),
        Validators.maxLength(o.name.maxlength)
      ]],
      state_id: [null, [
        Validators.required,
        Validators.min(o.state_id.min),
      ]]
    });
  }

  reset(form) {
    form.get('ibge_code').setValue(null);
    form.get('name').setValue(null);
    form.get('state_id').setValue(null);
    return form;
  }
}
