import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {CollectionComponent} from '../../common/abstract/collection/collection.component';
import {BidHttpService} from '../bid-http.service';
import {BidFormService} from '../bid-form/bid-form.service';

@Component({
  selector: 'app-bid-table',
  templateUrl: './bid-table.component.html',
  styleUrls: ['./bid-table.component.css']
})
export class BidTableComponent extends CollectionComponent {
  sortColumn = {column: 'created_at', sort: 'desc'};

  constructor(service: BidHttpService,
              route: ActivatedRoute,
              formService: BidFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
