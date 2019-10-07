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
      document_type_id: {
        id: 'document_type_id',
        label: 'Tipo de Documento',
        placeholder: 'Tipo de Documento',
      }
    };
  }

  hydrate(model, form) {
    form.get('content').setValue(model.content);
    form.get('document_type_id').setValue(model.document_type_id);
    return form;
  }

  make() {
    const o = this.fieldOptions();
    return this.formBuilder.group({
      content: ['111.913.400-58', [
        Validators.required,
      ]],
      document_type_id: ['Nome Fantasia' + (new Date().getTime()), [
        Validators.required,
      ]],
    });
  }

  reset(form) {
    form.get('content').setValue(null);
    form.get('document_type_id').setValue(null);
    return form;
  }
}
