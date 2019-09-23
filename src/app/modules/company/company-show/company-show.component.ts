import { Component, OnInit } from '@angular/core';
import {CompanyHttpService} from '../company-http.service';

@Component({
  selector: 'app-company-show',
  templateUrl: './company-show.component.html',
  styleUrls: ['./company-show.component.css']
})
export class CompanyShowComponent implements OnInit {



  constructor(private http: CompanyHttpService) { }

  ngOnInit() {
  }

}
