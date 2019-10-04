import {Component} from '@angular/core';
import {ShowComponent} from '../../common/abstract/show/show.component';
import {BidHttpService} from '../bid-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BidFormService} from '../bid-form/bid-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';

@Component({
  selector: 'app-bid-show',
  templateUrl: './bid-show.component.html',
  styleUrls: ['./bid-show.component.css']
})
export class BidShowComponent extends ShowComponent {
  constructor(service: BidHttpService,
              route: ActivatedRoute,
              formService: BidFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
