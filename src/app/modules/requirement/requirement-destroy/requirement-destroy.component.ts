import {Component} from '@angular/core';
import {RequirementHttpService} from '../requirement-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RequirementFormService} from '../requirement-form/requirement-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {DestroyComponent} from '../../common/abstract/destroy/destroy.component';

@Component({
  selector: 'app-requirement-destroy',
  templateUrl: './requirement-destroy.component.html',
  styleUrls: ['./requirement-destroy.component.css']
})
export class RequirementDestroyComponent extends DestroyComponent {
  successMessage = 'Requisito apagado com sucesso.';

  constructor(service: RequirementHttpService,
              route: ActivatedRoute,
              formService: RequirementFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
