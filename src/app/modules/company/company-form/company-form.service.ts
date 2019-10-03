import {Injectable} from '@angular/core';
import {Validators} from '@angular/forms';
import {FormService} from '../../common/abstract/form.service';
import {FieldsOptions} from '../../common/abstract/fields-options';

@Injectable({
  providedIn: 'root'
})

export class CompanyFormService extends FormService {
  fieldOptions(): FieldsOptions {
    return {
      name: {
        id: 'name',
        label: 'Razão Social',
        placeholder: 'Digite a Razão Social',
        minlength: 3,
        maxlength: 255
      },
      trade_name: {
        id: 'trade_name',
        label: 'Nome Fantasia',
        placeholder: 'Digite o Nome Fantasia',
        minlength: 3,
        maxlength: 255
      },
    };
  }

  hydrate(model, form) {
    form.get('name').setValue(model.name);
    form.get('trade_name').setValue(model.trade_name);
    return form;
  }

  make() {
    const o = this.fieldOptions();
    return this.formBuilder.group({
      name: ['Empresa ' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(o.name.minlength),
        Validators.maxLength(o.name.maxlength)
      ]],
      trade_name: ['Nome Fantasia' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(o.trade_name.minlength),
        Validators.maxLength(o.trade_name.maxlength)
      ]]
    });
  }

  reset(form) {
    form.get('name').setValue(null);
    form.get('trade_name').setValue(null);
    return form;
  }
}
