import {Injectable} from '@angular/core';
import {FieldsOptions} from '../../common/abstract/fields-options';
import {Validators} from '@angular/forms';
import {FormService} from '../../common/abstract/form.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentFormService extends FormService {
  fieldOptions(): FieldsOptions {
    return {
      content: {
        id: 'content',
        label: 'content',
        placeholder: 'Conteúdo',
      },
      file: {
        id: 'file',
        label: 'file',
        placeholder: 'Arquivo',
      },
      expiration_date: {
        id: 'expiration_date',
        label: 'expiration_date',
        placeholder: 'Data de Validade',
      },
      document_type: {
        id: 'document_type',
        label: 'Tipo de Documento',
        placeholder: 'Tipo de Documento',
      }
    };
  }

  hydrate(model, form) {
    form.get('content').setValue(model.content);
    form.get('file').setValue(model.file);
    form.get('expiration_date').setValue(model.expiration_date);
    form.get('document_type').setValue(model.document_type);
    return form;
  }

  make() {
    const o = this.fieldOptions();
    return this.formBuilder.group({
      content: ['Empresa ' + (new Date().getTime()), [
        Validators.required,
      ]],
      file: ['Nome Fantasia' + (new Date().getTime()), [
        Validators.required,
      ]],
      expiration_date: ['Nome Fantasia' + (new Date().getTime()), [
        Validators.required,
      ]],
      document_type: ['Nome Fantasia' + (new Date().getTime()), [
        Validators.required,
      ]],
    });
  }

  reset(form) {
    form.get('content').setValue(null);
    form.get('file').setValue(null);
    form.get('expiration_date').setValue(null);
    form.get('document_type').setValue(null);
    return form;
  }
}
