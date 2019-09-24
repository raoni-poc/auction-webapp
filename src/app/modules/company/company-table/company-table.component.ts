import {Component} from '@angular/core';
import {CompanyHttpService} from '../company-http.service';
import {CollectionComponent} from '../../common/abstract/collection/collection.component';

@Component({
  selector: 'app-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.css']
})
export class CompanyTableComponent extends CollectionComponent {
  sortColumn = {column: 'created_at', sort: 'desc'};

  constructor(service: CompanyHttpService) {
    super(service);
  }
}
