import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import companyFieldOptions from '../company-fields-options';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {EditComponent} from '../../common/abstract/edit/edit.component';
import {HttpService} from '../../common/abstract/service/http.service';
import {Location} from '@angular/common';
import {CompanyHttpService} from '../company-http.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent extends EditComponent {
  slug = 'company';
  successMessage = 'Empresa editada com sucesso.';

  constructor(service: CompanyHttpService,
              route: ActivatedRoute,
              formBuilder: FormBuilder,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formBuilder, location, router, notifyMessage);
  }

  hydrateForm(response) {
    this.form.get('name').setValue(response.name);
    this.form.get('trade_name').setValue(response.trade_name);
  }

  makeForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(companyFieldOptions.name.validationMessage.minlength),
        Validators.maxLength(companyFieldOptions.name.validationMessage.maxlength)
      ]],
      trade_name: ['', [
        Validators.required,
        Validators.minLength(companyFieldOptions.trade_name.validationMessage.minlength),
        Validators.maxLength(companyFieldOptions.trade_name.validationMessage.maxlength)
      ]]
    });
  }
}
