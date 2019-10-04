import {Component} from '@angular/core';
import {InsertComponent} from '../../common/abstract/insert/insert.component';
import {DocumentHttpService} from '../document-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DocumentFormService} from '../document-form/document-form.service';
import {Location} from '@angular/common';
import {NotifyMessageService} from '../../common/notify-message/notify-message.service.ts.service';

@Component({
  selector: 'app-document-insert',
  templateUrl: './document-insert.component.html',
  styleUrls: ['./document-insert.component.css']
})
export class DocumentInsertComponent extends InsertComponent {
  successMessage = 'Documento inserido com sucesso.';

  constructor(service: DocumentHttpService,
              route: ActivatedRoute,
              formService: DocumentFormService,
              location: Location,
              router: Router,
              notifyMessage: NotifyMessageService) {
    super(service, route, formService, location, router, notifyMessage);
  }
}
