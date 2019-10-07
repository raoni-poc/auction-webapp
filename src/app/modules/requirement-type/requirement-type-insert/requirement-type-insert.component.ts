import {Component} from '@angular/core';
import {CompanyHttpService} from '../../company/company-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RequirementTypeFormService} from '../requirement-type-form/requirement-type-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {InsertComponent} from '../../common/abstract/insert/insert.component';
import {RequirementTypeHttpService} from '../requirement-type-http.service';

@Component({
  selector: 'app-requirement-type-insert',
  templateUrl: './requirement-type-insert.component.html',
  styleUrls: ['./requirement-type-insert.component.css']
})
export class RequirementTypeInsertComponent extends InsertComponent {
  successMessage = 'Tipo de requisito criado com sucesso.';

  constructor(service: RequirementTypeHttpService,
              route: ActivatedRoute,
              formService: RequirementTypeFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
