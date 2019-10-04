import {Component} from '@angular/core';
import {OfferHttpService} from '../offer-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {OfferFormService} from '../offer-form/offer-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {DestroyComponent} from '../../common/abstract/destroy/destroy.component';

@Component({
  selector: 'app-offer-destroy',
  templateUrl: './offer-destroy.component.html',
  styleUrls: ['./offer-destroy.component.css']
})
export class OfferDestroyComponent extends DestroyComponent {
  successMessage = 'Oferta apagada com sucesso.';

  constructor(service: OfferHttpService,
              route: ActivatedRoute,
              formService: OfferFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
