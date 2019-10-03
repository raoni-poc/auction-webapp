import {Injectable} from '@angular/core';
import {FieldsOptions} from '../../common/abstract/fields-options';
import {Validators} from '@angular/forms';
import {FormService} from '../../common/abstract/form.service';

@Injectable({
  providedIn: 'root'
})
export class CargoFormService extends FormService {
  fieldOptions(): FieldsOptions {
    return {
      cargo: {
        id: 'cargo',
        label: 'Carga',
        placeholder: 'Digite a carga',
        minlength: 3,
        maxlength: 255
      },
      packing: {
        id: 'cargo',
        label: 'Embalagem',
        placeholder: 'Descrição da embalagem',
        minlength: 3,
        maxlength: 255

      },
      description: {
        id: 'description',
        label: 'Descrição',
        placeholder: 'Digite a descrição da carga',
        minlength: 5,
        maxlength: 1500
      },
    };
  }

  hydrate(model, form) {
    form.get('cargo').setValue(model.cargo);
    form.get('packing').setValue(model.packing);
    form.get('description').setValue(model.description);
    return form;
  }

  make() {
    const o = this.fieldOptions();
    return this.formBuilder.group({
      cargo: ['Carga ' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(o.cargo.minlength),
        Validators.maxLength(o.cargo.maxlength)
      ]],
      packing: ['Embalagem' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(o.packing.minlength),
        Validators.maxLength(o.packing.maxlength)
      ]],
      description: ['Descrição' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(o.description.minlength),
        Validators.maxLength(o.description.maxlength)
      ]]
    });
  }

  reset(form) {
    form.get('cargo').setValue(null);
    form.get('packing').setValue(null);
    form.get('description').setValue(null);
    return form;
  }
}
