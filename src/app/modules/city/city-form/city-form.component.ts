import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormComponent} from '../../common/abstract/formComponent';
import {StateHttpService} from '../../state/state-http.service';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.css']
})
export class CityFormComponent extends FormComponent implements OnInit {
  items = [];
  searchInput = new Subject<string>();
  protected selectFormControlName: string;

  constructor(protected changeRef: ChangeDetectorRef,
              private selectService: StateHttpService) {
    super(changeRef);
    this.selectFormControlName = 'state_id';
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
          name: option.name + ' / ' + option.abbreviation
        });
      });
    }
    this.items = selectItems;
  }

}
