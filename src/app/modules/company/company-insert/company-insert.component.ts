import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import companyFieldOptions from '../company-fields-options';
import {CompanyHttpService} from '../company-http.service';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {InsertComponent} from '../../common/abstract/insert/insert.component';
import {HttpService} from '../../common/abstract/service/http.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-company-insert',
  templateUrl: './company-insert.component.html',
  styleUrls: ['./company-insert.component.css']
})
export class CompanyInsertComponent extends InsertComponent {
  slug = 'company';
  successMessage = 'Empresa criada com sucesso.';

  constructor(service: CompanyHttpService,
              route: ActivatedRoute,
              formBuilder: FormBuilder,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formBuilder, location, router, notifyMessage);
  }

  makeForm(): FormGroup {
    return this.formBuilder.group({
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

}
