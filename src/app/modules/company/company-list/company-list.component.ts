import {Component, OnInit} from '@angular/core';
import {Company} from '../company.interface';
import {CompanyHttpService} from '../company-http.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companies: Array<Company> = [];
  pagination = {
    page: 1,
    totalItems: 0,
    itemsPerPage: 15,
  };
  sortColumn = {column: 'created_at', sort: 'desc'};
  searchText: string;

  categoryId: number;

  constructor(private categoryHttp: CompanyHttpService) {

  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    // this.categoryHttp.list({
    //   page: this.pagination.page,
    //   sort: this.sortColumn.column === '' ? null : this.sortColumn,
    //   search: this.searchText
    // }).subscribe(response => {
    //   this.companies = response.data;
    //   this.pagination.totalItems = response.meta.total;
    //   this.pagination.itemsPerPage = response.meta.per_page;
    // });
  }
  //
  // pageChanged(page) {
  //   this.pagination.page = page;
  //   this.getCategories();
  // }

  sort(sortColumn) {
    this.getCategories();
  }

  search(search) {
    this.searchText = search;
    this.getCategories();
  }

}
