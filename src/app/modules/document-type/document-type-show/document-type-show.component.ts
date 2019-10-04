import {Component} from '@angular/core';
import {DocumentTypeHttpService} from '../document-type-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DocumentTypeFormService} from '../document-type-form/document-type-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';
import {ShowComponent} from '../../common/abstract/show/show.component';

@Component({
  selector: 'app-document-type-show',
  templateUrl: './document-type-show.component.html',
  styleUrls: ['./document-type-show.component.css']
})
export class DocumentTypeShowComponent extends ShowComponent {
  constructor(service: DocumentTypeHttpService,
              route: ActivatedRoute,
              formService: DocumentTypeFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
