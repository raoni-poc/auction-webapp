import {ChangeDetectorRef, Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import companyFieldOptions from '../company-fields-options';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnChanges {

  @Input() form: FormGroup;

  constructor(private changeRef: ChangeDetectorRef) {
  }

  ngOnChanges(): void {
    this.changeRef.detectChanges();
  }

  get fieldOptions(): any {
    return companyFieldOptions;
  }

  buildForm(formBuild: FormBuilder) {
    return formBuild.group({
      name: ['Empresa ' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(this.fieldOptions.name.validationMessage.minlength),
        Validators.maxLength(this.fieldOptions.name.validationMessage.maxlength)
      ]],
      trade_name: ['Nome Fantasia' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(this.fieldOptions.trade_name.validationMessage.minlength),
        Validators.maxLength(this.fieldOptions.trade_name.validationMessage.maxlength)
      ]]
    });
  }

}
