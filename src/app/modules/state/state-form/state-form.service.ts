import {Injectable} from '@angular/core';
import {FormService} from '../../common/abstract/form.service';
import {FieldsOptions} from '../../common/abstract/fields-options';
import {Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StateFormService extends FormService {
  fieldOptions(): FieldsOptions {
    return {
      name: {
        id: 'name',
        label: 'Nome',
        placeholder: 'Digite o Estado',
        minlength: 3,
        maxlength: 255
      },
      abbreviation: {
        id: 'abbreviation',
        label: 'Abreviação',
        placeholder: 'Digite a abreviação do estado',
        minlength: 3,
        maxlength: 255
      },
      country_id: {
        id: 'country_id',
        label: 'Pais',
      },
    };
  }

  hydrate(model, form) {
    form.get('name').setValue(model.name);
    form.get('abbreviation').setValue(model.abbreviation);
    form.get('country_id').setValue(model.country_id);
    return form;
  }

  make() {
    const o = this.fieldOptions();
    return this.formBuilder.group({
      name: ['Estado ' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(o.name.minlength),
        Validators.maxLength(o.name.maxlength)
      ]],
      abbreviation: ['ES' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(o.abbreviation.minlength),
        Validators.maxLength(o.abbreviation.maxlength)
      ]],
      country_id: [1, [
        Validators.required,
        Validators.minLength(o.abbreviation.minlength),
        Validators.maxLength(o.abbreviation.maxlength)
      ]],
    });
  }

  reset(form) {
    form.get('name').setValue(null);
    form.get('abbreviation').setValue(null);
    return form;
  }
}
