import {Component} from '@angular/core';
import {CompanyHttpService} from '../../company/company-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RequirementTypeFormService} from '../requirement-type-form/requirement-type-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {DestroyComponent} from '../../common/abstract/destroy/destroy.component';

@Component({
  selector: 'app-requirement-type-destroy',
  templateUrl: './requirement-type-destroy.component.html',
  styleUrls: ['./requirement-type-destroy.component.css']
})
export class RequirementTypeDestroyComponent extends DestroyComponent {
  successMessage = 'Tipo de requisito apagado com sucesso.';

  constructor(service: CompanyHttpService,
              route: ActivatedRoute,
              formService: RequirementTypeFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
