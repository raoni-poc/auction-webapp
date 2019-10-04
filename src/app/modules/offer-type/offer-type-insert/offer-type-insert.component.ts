import {Component} from '@angular/core';
import {OfferTypeHttpService} from '../offer-type-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {OfferTypeFormService} from '../offer-type-form/offer-type-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {InsertComponent} from '../../common/abstract/insert/insert.component';

@Component({
  selector: 'app-offer-type-insert',
  templateUrl: './offer-type-insert.component.html',
  styleUrls: ['./offer-type-insert.component.css']
})
export class OfferTypeInsertComponent extends InsertComponent {
  successMessage = 'Tipo de oferta criada com sucesso.';

  constructor(service: OfferTypeHttpService,
              route: ActivatedRoute,
              formService: OfferTypeFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
