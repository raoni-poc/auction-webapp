import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormComponent} from '../../common/abstract/formComponent';
import {Subject} from 'rxjs';
import {CityHttpService} from '../../city/city-http.service';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {StateHttpService} from '../state-http.service';
import {CountryHttpService} from '../../country/country-http.service';

@Component({
  selector: 'app-state-form',
  templateUrl: './state-form.component.html',
  styleUrls: ['./state-form.component.css']
})
export class StateFormComponent extends FormComponent implements OnInit{
  items = [];
  searchInput = new Subject<string>();
  protected selectFormControlName: string;

  constructor(protected changeRef: ChangeDetectorRef,
              private selectService: CountryHttpService) {
    super(changeRef);
    this.selectFormControlName = 'country_id';
  }

  onSearch(search) {
    this.searchInput.next(search);
  }

  ngOnInit(): void {
    this.searchInput.pipe(
      map((event: any) => {
        return event.term;
      }),
      filter((res: string) => res.length > 1),
      debounceTime(300),
      distinctUntilChanged())
      .subscribe((term: string) => {
        this.suggestOptions(term);
      });
  }

  changeSelect(event) {
    const formControl = this.form.get(this.selectFormControlName);
    if (!isNaN(event) && formControl.pristine) {
      this.replaceIdByName(event);
    }
  }

  private suggestOptions(termSearch) {
    this.selectService.collection({
      page: 1,
      search: termSearch
    }).subscribe((result) => {
      this.syncOptionsInSelect(result.data);
    });
  }

  private replaceIdByName(id) {
    this.selectService.show(id).subscribe((result) => {
      this.syncOptionsInSelect([result]);
    });
  }

  private syncOptionsInSelect(options) {
    const selectItems = [];
    if (options.length > 0) {
      options.forEach(option => {
        selectItems.push({
          id: option.id,
          name: option.name
        });
      });
    }
    this.items = selectItems;
  }
}

