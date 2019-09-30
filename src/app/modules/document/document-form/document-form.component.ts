import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import companyFieldOptions from '../../company/company-fields-options';
import {FormComponent} from '../../common/abstract/form.component';
import documentFieldOptions from '../document-fields-options';

@Component({
  selector: 'app-document-form',
  templateUrl: './document-form.component.html',
  styleUrls: ['./document-form.component.css']
})
export class DocumentFormComponent extends FormComponent {

  static makeForm(formBuild: FormBuilder) {
    const o = documentFieldOptions;
    return formBuild.group({
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

  get fieldOptions(): any {
    return documentFieldOptions;
  }

}
