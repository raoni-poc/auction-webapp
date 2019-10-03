import {Injectable} from '@angular/core';
import {FormService} from '../../common/abstract/form.service';
import {FieldsOptions} from '../../common/abstract/fields-options';
import {Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CountryFormService extends FormService {
  fieldOptions(): FieldsOptions {
    return {
      name: {
        id: 'name',
        label: 'País',
        placeholder: 'Digite o status.',
        minlength: 3,
        maxlength: 255
      },
      abbreviation: {
        id: 'abbreviation',
        label: 'Abreviação',
        placeholder: 'Digite a abreviação do país.',
        minlength: 3,
        maxlength: 255
      }
    };
  }

  hydrate(model, form) {
    form.get('name').setValue(model.name);
    form.get('abbreviation').setValue(model.abbreviation);
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
      abbreviation: ['A' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(o.abbreviation.minlength),
        Validators.maxLength(o.abbreviation.maxlength)
      ]]
    });
  }

  reset(form) {
    form.get('name').setValue(null);
    form.get('abbreviation').setValue(null);
    return form;
  }
}
