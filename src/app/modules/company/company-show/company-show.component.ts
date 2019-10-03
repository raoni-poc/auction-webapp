import {Component} from '@angular/core';
import {CompanyHttpService} from '../company-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ShowComponent} from '../../common/abstract/show/show.component';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {CompanyFormService} from '../company-form/company-form.service';

@Component({
  selector: 'app-company-show',
  templateUrl: './company-show.component.html',
  styleUrls: ['./company-show.component.css']
})
export class CompanyShowComponent extends ShowComponent {
  constructor(service: CompanyHttpService,
              route: ActivatedRoute,
              formService: CompanyFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
