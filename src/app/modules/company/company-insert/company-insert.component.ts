import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import companyFieldOptions from '../company-fields-options';
import {CompanyHttpService} from '../company-http.service';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';

@Component({
  selector: 'app-company-insert',
  templateUrl: './company-insert.component.html',
  styleUrls: ['./company-insert.component.css']
})
export class CompanyInsertComponent {

  form: FormGroup;
  errors = {};

  constructor(private service: CompanyHttpService,
              private formBuilder: FormBuilder,
              private router: Router,
              private notifyMessage: NotifyMessageService) {
    this.form = this.formBuilder.group({
      name: ['Empresa ' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(companyFieldOptions.name.validationMessage.minlength),
        Validators.maxLength(companyFieldOptions.name.validationMessage.maxlength)
      ]],
      trade_name: ['Nome Fantasia' + (new Date().getTime()), [
        Validators.required,
        Validators.minLength(companyFieldOptions.trade_name.validationMessage.minlength),
        Validators.maxLength(companyFieldOptions.trade_name.validationMessage.maxlength)
      ]]
    });
  }

  onSubmit() {
    this.service
      .insert(this.form.value)
      .subscribe((input) => {
        this.form.reset({
          name: null,
          trade_name: null,
        });
        this.notifyMessage.success('Empresa criada com sucesso.');
        this.router.navigate(['/company/' + input.id]);
      }, responseError => {
        this.errors = responseError.error.errors;
      });
  }

  showErrors() {
    return Object.keys(this.errors).length !== 0;
  }

}
