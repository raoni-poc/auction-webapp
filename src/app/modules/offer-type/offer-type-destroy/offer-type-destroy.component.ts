import {Component} from '@angular/core';
import {OfferTypeHttpService} from '../offer-type-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {OfferTypeFormService} from '../offer-type-form/offer-type-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {DestroyComponent} from '../../common/abstract/destroy/destroy.component';

@Component({
  selector: 'app-offer-type-destroy',
  templateUrl: './offer-type-destroy.component.html',
  styleUrls: ['./offer-type-destroy.component.css']
})
export class OfferTypeDestroyComponent extends DestroyComponent {
  successMessage = 'Tipo de oferta apagada com sucesso.';

  constructor(service: OfferTypeHttpService,
              route: ActivatedRoute,
              formService: OfferTypeFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
