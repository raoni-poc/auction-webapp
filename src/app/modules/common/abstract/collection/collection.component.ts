import {Component, OnInit} from '@angular/core';
import {HttpService} from '../service/http.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})

export class CollectionComponent implements OnInit {

  collection: Array<any> = [];
  pagination = {
    page: 1,
    totalItems: 0,
    itemsPerPage: 15,
  };
  sortColumn = {column: 'created_at', sort: 'desc'};
  searchText: string;
  id: number;

  constructor(private service: HttpService) {
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.service.collection({
      page: this.pagination.page,
      sort: this.sortColumn.column === '' ? null : this.sortColumn,
      search: this.searchText
    }).subscribe(response => {
      this.collection = response.data;
      this.pagination.totalItems = response.meta.total;
      this.pagination.itemsPerPage = response.meta.per_page;
    });
  }

  pageChanged(page) {
    this.pagination.page = page;
    this.refresh();
  }

  sort(sortColumn) {
    this.refresh();
  }

  search(search) {
    this.searchText = search;
    this.refresh();
  }

}
