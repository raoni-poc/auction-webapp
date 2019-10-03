import {Injectable} from '@angular/core';
import {FieldsOptions} from '../../common/abstract/fields-options';
import {Validators} from '@angular/forms';
import {FormService} from '../../common/abstract/form.service';

@Injectable({
  providedIn: 'root'
})
export class RequirimentFormService extends FormService {
  fieldOptions(): FieldsOptions {
    return {
      name: {
        id: 'name',
        label: 'Nome',
        placeholder: 'Digite o Nome',
        minlength: 3,
        maxlength: 255
      },
      requirement_type_id: {
        id: 'name',
        label: 'Tipo de Requirimento',
      },
    };
  }

  hydrate(model, form) {
    form.get('name').setValue(model.name);
    form.get('requirement_type_id').setValue(model.requirement_type_id);
    return form;
  }

  make() {
    const o = this.fieldOptions();
    return this.formBuilder.group({
      name: ['Requisito ' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(o.name.minlength),
        Validators.maxLength(o.name.maxlength)
      ]],
      requirement_type_id: ['Requisito ' + (new Date().getTime()), [
        Validators.required,
      ]]
    });
  }

  reset(form) {
    form.get('name').setValue(null);
    form.get('requirement_type_id').setValue(null);
    return form;
  }
}
