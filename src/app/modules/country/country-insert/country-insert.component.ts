import {Component} from '@angular/core';
import {InsertComponent} from '../../common/abstract/insert/insert.component';
import {CountryHttpService} from '../country-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CountryFormService} from '../country-form/country-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';

@Component({
  selector: 'app-country-insert',
  templateUrl: './country-insert.component.html',
  styleUrls: ['./country-insert.component.css']
})
export class CountryInsertComponent extends InsertComponent {
  successMessage = 'País criado com sucesso.';

  constructor(service: CountryHttpService,
              route: ActivatedRoute,
              formService: CountryFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
