import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {OfferTypeHttpService} from '../offer-type-http.service';
import {Component} from '@angular/core';
import {EditComponent} from '../../common/abstract/edit/edit.component';
import {OfferTypeFormService} from '../offer-type-form/offer-type-form.service';

@Component({
  selector: 'app-offer-type-edit',
  templateUrl: './offer-type-edit.component.html',
  styleUrls: ['./offer-type-edit.component.css']
})
export class OfferTypeEditComponent extends EditComponent {
  successMessage = 'Tipo de oferta editada com sucesso.';

  constructor(service: OfferTypeHttpService,
              route: ActivatedRoute,
              formService: OfferTypeFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
