import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {EditComponent} from '../../common/abstract/edit/edit.component';
import {Location} from '@angular/common';
import {CompanyHttpService} from '../company-http.service';
import {CompanyFormService} from '../company-form/company-form.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent extends EditComponent {
  successMessage = 'Empresa editada com sucesso.';

  constructor(service: CompanyHttpService,
              route: ActivatedRoute,
              formService: CompanyFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
