import {Component} from '@angular/core';
import {OfferTypeHttpService} from '../offer-type-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {OfferTypeFormService} from '../offer-type-form/offer-type-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {ShowComponent} from '../../common/abstract/show/show.component';

@Component({
  selector: 'app-offer-type-show',
  templateUrl: './offer-type-show.component.html',
  styleUrls: ['./offer-type-show.component.css']
})
export class OfferTypeShowComponent extends ShowComponent {
  constructor(service: OfferTypeHttpService,
              route: ActivatedRoute,
              formService: OfferTypeFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
