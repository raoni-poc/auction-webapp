import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CompanyHttpService} from '../company-http.service';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {InsertComponent} from '../../common/abstract/insert/insert.component';
import {Location} from '@angular/common';
import {CompanyFormService} from '../company-form/company-form.service';

@Component({
  selector: 'app-company-insert',
  templateUrl: './company-insert.component.html',
  styleUrls: ['./company-insert.component.css']
})
export class CompanyInsertComponent extends InsertComponent {
  successMessage = 'Empresa criada com sucesso.';

  constructor(service: CompanyHttpService,
              route: ActivatedRoute,
              formService: CompanyFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
