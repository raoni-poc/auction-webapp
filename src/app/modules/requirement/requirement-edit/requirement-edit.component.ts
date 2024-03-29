import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {RequirementHttpService} from '../requirement-http.service';
import {EditComponent} from '../../common/abstract/edit/edit.component';
import {RequirementFormService} from '../requirement-form/requirement-form.service';

@Component({
  selector: 'app-requirement-edit',
  templateUrl: './requirement-edit.component.html',
  styleUrls: ['./requirement-edit.component.css']
})
export class RequirementEditComponent extends EditComponent {
  successMessage = 'Requisito editado com sucesso.';

  constructor(service: RequirementHttpService,
              route: ActivatedRoute,
              formService: RequirementFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
