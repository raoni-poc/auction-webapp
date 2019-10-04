import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpService} from '../common/abstract/service/http.service';

@Injectable({
  providedIn: 'root'
})

export class AccountStatusHttpService extends HttpService {
  constructor(protected http: HttpClient) {
    super(http);
    this.slug = 'account-status';
  }
}
