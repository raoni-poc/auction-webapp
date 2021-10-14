import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormComponent} from '../../common/abstract/formComponent';
import {Subject} from 'rxjs';
import {StateHttpService} from '../../state/state-http.service';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {CityHttpService} from '../../city/city-http.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent extends FormComponent implements OnInit{
  items = [];
  searchInput = new Subject<string>();
  protected selectFormControlName: string;

  constructor(protected changeRef: ChangeDetectorRef,
              private selectService: CityHttpService) {
    super(changeRef);
    this.selectFormControlName = 'city_id';
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
          name: option.name + ' / ' + option.state.abbreviation
        });
      });
    }
    this.items = selectItems;
  }
}
