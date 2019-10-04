import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {CountryHttpService} from '../country-http.service';
import {EditComponent} from '../../common/abstract/edit/edit.component';
import {CountryFormService} from '../country-form/country-form.service';

@Component({
  selector: 'app-country-edit',
  templateUrl: './country-edit.component.html',
  styleUrls: ['./country-edit.component.css']
})
export class CountryEditComponent extends EditComponent {
  successMessage = 'País editado com sucesso.';

  constructor(service: CountryHttpService,
              route: ActivatedRoute,
              formService: CountryFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
