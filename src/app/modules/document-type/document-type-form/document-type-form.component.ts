import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import documentTypeFieldOptions from '../document-type-fields-options';
import {FormComponent} from '../../common/abstract/form.component';

@Component({
  selector: 'app-document-type-form',
  templateUrl: './document-type-form.component.html',
  styleUrls: ['./document-type-form.component.css']
})
export class DocumentTypeFormComponent extends FormComponent {

  static makeForm(formBuild: FormBuilder) {
    const o = documentTypeFieldOptions;
    return formBuild.group({
      name: ['Document Type ' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(o.name.validationMessage.minlength),
        Validators.maxLength(o.name.validationMessage.maxlength)
      ]],
    });
  }

  get fieldOptions(): any {
    return documentTypeFieldOptions;
  }

}
