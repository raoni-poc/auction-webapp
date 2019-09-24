import {Component} from '@angular/core';
import {CollectionComponent} from '../../common/abstract/collection/collection.component';
import {AccountStatusHttpService} from '../account-status-http.service';

@Component({
  selector: 'app-account-status-table',
  templateUrl: './account-status-table.component.html',
  styleUrls: ['./account-status-table.component.css']
})
export class AccountStatusTableComponent extends CollectionComponent {
  sortColumn = {column: 'name', sort: 'desc'};

  constructor(service: AccountStatusHttpService) {
    super(service);
  }
}
