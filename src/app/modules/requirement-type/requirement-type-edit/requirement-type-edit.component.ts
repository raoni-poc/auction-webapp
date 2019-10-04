import {Component} from '@angular/core';
import {CompanyHttpService} from '../../company/company-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {EditComponent} from '../../common/abstract/edit/edit.component';
import {RequirementTypeFormService} from '../requirement-type-form/requirement-type-form.service';

@Component({
  selector: 'app-requirement-type-edit',
  templateUrl: './requirement-type-edit.component.html',
  styleUrls: ['./requirement-type-edit.component.css']
})
export class RequirementTypeEditComponent extends EditComponent {
  successMessage = 'Tipo de requisito editado com sucesso.';

  constructor(service: CompanyHttpService,
              route: ActivatedRoute,
              formService: RequirementTypeFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
