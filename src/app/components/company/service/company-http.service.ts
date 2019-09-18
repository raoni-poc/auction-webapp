import {Injectable} from '@angular/core';
import {Company} from '../company.interface';
import {SearchParamsBuilder} from '../../common/search-params-builder/search-params-builder.class';
import {Observable} from 'rxjs';
import {SearchParams} from '../../../interfaces/search-params.interface';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyHttpService {
  private baseUrl = `${environment.api.url}/categories`;

  constructor(private http: HttpClient) {
  }

  list(searchParams: SearchParams): Observable<{ data: Array<Company>, meta: any }> {
    const sParams = new SearchParamsBuilder(searchParams).makeObject();
    const params = new HttpParams((<any> sParams));
    return this.http.get<{ data: Array<Company>, meta: any }>
    (this.baseUrl, {params});
  }

  get(id: number): Observable<Company> {
    return this.http.get<{ data: Company }>
    (`${this.baseUrl}/${id}`).pipe(
      map(response => response.data)
    );
  }

  create(data: Company): Observable<Company> {
    return this.http.post<{ data: Company }>(this.baseUrl, data).pipe(
      map(response => response.data)
    );
  }

  update(id: number, data: Company): Observable<Company> {
    return this.http.put<{ data: Company }>(`${this.baseUrl}/${id}`, data).pipe(
      map(response => response.data)
    );
  }

  destroy(id: number): Observable<any> {
    return this.http.delete
    (`${this.baseUrl}/${id}`);
  }
}
