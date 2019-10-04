import {Component} from '@angular/core';
import {OfferHttpService} from '../offer-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {OfferFormService} from '../offer-form/offer-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {ShowComponent} from '../../common/abstract/show/show.component';

@Component({
  selector: 'app-offer-show',
  templateUrl: './offer-show.component.html',
  styleUrls: ['./offer-show.component.css']
})
export class OfferShowComponent extends ShowComponent {
  constructor(service: OfferHttpService,
              route: ActivatedRoute,
              formService: OfferFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
