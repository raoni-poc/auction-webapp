import {Component} from '@angular/core';
import {ShowComponent} from '../../common/abstract/show/show.component';
import {CountryHttpService} from '../country-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CountryFormService} from '../country-form/country-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';

@Component({
  selector: 'app-country-show',
  templateUrl: './country-show.component.html',
  styleUrls: ['./country-show.component.css']
})
export class CountryShowComponent extends ShowComponent {
  constructor(service: CountryHttpService,
              route: ActivatedRoute,
              formService: CountryFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
