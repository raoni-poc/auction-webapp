import {Component} from '@angular/core';
import {DestroyComponent} from '../../common/abstract/destroy/destroy.component';
import {BidHttpService} from '../bid-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BidFormService} from '../bid-form/bid-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';

@Component({
  selector: 'app-bid-destroy',
  templateUrl: './bid-destroy.component.html',
  styleUrls: ['./bid-destroy.component.css']
})
export class BidDestroyComponent extends DestroyComponent {
  successMessage = 'Lance apagado com sucesso.';

  constructor(service: BidHttpService,
              route: ActivatedRoute,
              formService: BidFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
