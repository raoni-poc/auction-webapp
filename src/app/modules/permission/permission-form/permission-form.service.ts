import {Injectable} from '@angular/core';
import {FormService} from '../../common/abstract/form.service';
import {FieldsOptions} from '../../common/abstract/fields-options';
import {Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PermissionFormService extends FormService {
  fieldOptions(): FieldsOptions {
    return {
      name: {
        id: 'name',
        label: 'Nome',
        placeholder: 'Digite um Nome para Permissão.',
        minlength: 3,
        maxlength: 255
      },
      guard_name: {
        id: 'guard_name',
        label: 'Nome',
        placeholder: 'Digite um nome guardião.',
        minlength: 3,
        maxlength: 255
      },
    };
  }

  hydrate(model, form) {
    form.get('name').setValue(model.name);
    form.get('guard_name').setValue(model.guard_name);
    return form;
  }

  make() {
    const o = this.fieldOptions();
    return this.formBuilder.group({
      name: ['Permissão ' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(o.name.minlength),
        Validators.maxLength(o.name.maxlength)
      ]],
      guard_name: ['guard_' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(o.guard_name.minlength),
        Validators.maxLength(o.guard_name.maxlength)
      ]]
    });
  }

  reset(form) {
    form.get('name').setValue(null);
    form.get('guard_name').setValue(null);
    return form;
  }
}
