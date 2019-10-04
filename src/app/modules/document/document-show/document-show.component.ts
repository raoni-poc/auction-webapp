import {Component} from '@angular/core';
import {ShowComponent} from '../../common/abstract/show/show.component';
import {DocumentHttpService} from '../document-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DocumentFormService} from '../document-form/document-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';

@Component({
  selector: 'app-document-show',
  templateUrl: './document-show.component.html',
  styleUrls: ['./document-show.component.css']
})
export class DocumentShowComponent extends ShowComponent {
  constructor(service: DocumentHttpService,
              route: ActivatedRoute,
              formService: DocumentFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
