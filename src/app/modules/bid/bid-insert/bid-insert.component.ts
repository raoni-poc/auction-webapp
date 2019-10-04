import {Component} from '@angular/core';
import {InsertComponent} from '../../common/abstract/insert/insert.component';
import {BidHttpService} from '../bid-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BidFormService} from '../bid-form/bid-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';

@Component({
  selector: 'app-bid-insert',
  templateUrl: './bid-insert.component.html',
  styleUrls: ['./bid-insert.component.css']
})
export class BidInsertComponent extends InsertComponent {
  successMessage = 'Lance feito com sucesso.';

  constructor(service: BidHttpService,
              route: ActivatedRoute,
              formService: BidFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
