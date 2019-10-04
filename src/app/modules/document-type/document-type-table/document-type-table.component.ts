import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {CollectionComponent} from '../../common/abstract/collection/collection.component';
import {DocumentTypeFormService} from '../document-type-form/document-type-form.service';
import {DocumentTypeHttpService} from '../document-type-http.service';

@Component({
  selector: 'app-document-type-table',
  templateUrl: './document-type-table.component.html',
  styleUrls: ['./document-type-table.component.css']
})
export class DocumentTypeTableComponent extends CollectionComponent {
  sortColumn = {column: 'created_at', sort: 'desc'};

  constructor(service: DocumentTypeHttpService,
              route: ActivatedRoute,
              formService: DocumentTypeFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
