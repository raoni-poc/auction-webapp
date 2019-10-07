import {Injectable} from '@angular/core';
import {FieldsOptions} from '../../common/abstract/fields-options';
import {Validators} from '@angular/forms';
import {FormService} from '../../common/abstract/form.service';

@Injectable({
  providedIn: 'root'
})
export class UserFormService extends FormService {
  fieldOptions(): FieldsOptions {
    return {
      name: {
        id: 'name',
        label: 'Nome',
        placeholder: 'Digite seu nome.',
        minlength: 3,
        maxlength: 255
      },
      email: {
        id: 'email',
        label: 'Email',
        placeholder: 'Digite seu email.',
        minlength: 3,
        maxlength: 255
      },
      password: {
        id: 'password',
        label: 'Senha',
        placeholder: 'Digite sua senha',
        minlength: 8,
        maxlength: 255
      },
    };
  }

  hydrate(model, form) {
    form.get('name').setValue(model.name);
    form.get('email').setValue(model.email);
    form.get('password').setValue(model.password);
    return form;
  }

  make() {
    const o = this.fieldOptions();
    return this.formBuilder.group({
      name: ['Usuario ' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(o.name.minlength),
        Validators.maxLength(o.name.maxlength)
      ]],
      email: ['email_teste_' + (new Date().getTime()) + '@com.br', [
        Validators.required,
        Validators.email,
        Validators.minLength(o.email.minlength),
        Validators.maxLength(o.email.maxlength)
      ]],
      password: ['12345678', [
        Validators.required,
        Validators.minLength(o.password.minlength),
        Validators.maxLength(o.password.maxlength)
      ]]
    });
  }

  reset(form) {
    form.get('name').setValue(null);
    form.get('email').setValue(null);
    form.get('password').setValue(null);
    return form;
  }
}
