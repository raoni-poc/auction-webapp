import {Component} from '@angular/core';
import {CompanyHttpService} from '../../company/company-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RequirementTypeFormService} from '../requirement-type-form/requirement-type-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {ShowComponent} from '../../common/abstract/show/show.component';
import {RequirementTypeHttpService} from '../requirement-type-http.service';

@Component({
  selector: 'app-requirement-type-show',
  templateUrl: './requirement-type-show.component.html',
  styleUrls: ['./requirement-type-show.component.css']
})
export class RequirementTypeShowComponent extends ShowComponent {
  constructor(service: RequirementTypeHttpService,
              route: ActivatedRoute,
              formService: RequirementTypeFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
