import {Component} from '@angular/core';
import {OfferHttpService} from '../offer-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {OfferFormService} from '../offer-form/offer-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {InsertComponent} from '../../common/abstract/insert/insert.component';

@Component({
  selector: 'app-offer-insert',
  templateUrl: './offer-insert.component.html',
  styleUrls: ['./offer-insert.component.css']
})
export class OfferInsertComponent extends InsertComponent {
  successMessage = 'Oferta criada com sucesso.';

  constructor(service: OfferHttpService,
              route: ActivatedRoute,
              formService: OfferFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
