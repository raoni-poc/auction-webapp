import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {SearchParams} from '../../interfaces/search-params.interface';
import {SearchParamsBuilder} from '../common/search-params-builder/search-params-builder.class';
import {Company} from './company.interface';
import {HttpService} from '../common/abstract/service/http.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyHttpService extends HttpService {
  constructor(protected http: HttpClient) {
    super(http);
    this.slug = 'company';
  }
}
