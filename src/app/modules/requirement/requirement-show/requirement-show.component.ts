import {Component} from '@angular/core';
import {RequirementHttpService} from '../requirement-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RequirementFormService} from '../requirement-form/requirement-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {ShowComponent} from '../../common/abstract/show/show.component';

@Component({
  selector: 'app-requirement-show',
  templateUrl: './requirement-show.component.html',
  styleUrls: ['./requirement-show.component.css']
})
export class RequirementShowComponent extends ShowComponent {
  constructor(service: RequirementHttpService,
              route: ActivatedRoute,
              formService: RequirementFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
