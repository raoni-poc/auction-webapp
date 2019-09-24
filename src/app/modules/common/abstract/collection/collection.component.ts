import {Component, OnInit} from '@angular/core';
import {HttpService} from '../service/http.service';

export abstract class CollectionComponent implements OnInit {

  collection: Array<any> = [];
  pagination = {
    page: 1,
    totalItems: 0,
    itemsPerPage: 15,
  };
  abstract sortColumn: {column: string, sort: string};
  searchText: string;
  id: number;

  protected constructor(protected service: HttpService) {
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

  sort() {
    this.refresh();
  }

  search(search) {
    this.searchText = search;
    this.refresh();
  }

}
