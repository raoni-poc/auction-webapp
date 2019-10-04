import {Component} from '@angular/core';
import {DestroyComponent} from '../../common/abstract/destroy/destroy.component';
import {CountryHttpService} from '../country-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CountryFormService} from '../country-form/country-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';

@Component({
  selector: 'app-country-destroy',
  templateUrl: './country-destroy.component.html',
  styleUrls: ['./country-destroy.component.css']
})
export class CountryDestroyComponent extends DestroyComponent {
  successMessage = 'País apagado com sucesso.';

  constructor(service: CountryHttpService,
              route: ActivatedRoute,
              formService: CountryFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
