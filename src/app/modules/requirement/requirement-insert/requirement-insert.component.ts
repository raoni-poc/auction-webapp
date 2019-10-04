import {Component} from '@angular/core';
import {RequirementHttpService} from '../requirement-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RequirementFormService} from '../requirement-form/requirement-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {InsertComponent} from '../../common/abstract/insert/insert.component';

@Component({
  selector: 'app-requirement-insert',
  templateUrl: './requirement-insert.component.html',
  styleUrls: ['./requirement-insert.component.css']
})
export class RequirementInsertComponent extends InsertComponent {
  successMessage = 'Requisito inserido com sucesso.';

  constructor(service: RequirementHttpService,
              route: ActivatedRoute,
              formService: RequirementFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
