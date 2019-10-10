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
  items = [
  ];
  searchInput = new Subject<string>();
  constructor(protected changeRef: ChangeDetectorRef,
              private stateHttpService: StateHttpService) {
    super(changeRef);
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
    const formControl = this.form.get('state_id');
    if (!isNaN(event) && formControl.pristine) {
      this.replaceStateIdByStateName(event);
    }
  }

  private suggestOptions(termSearch) {
    this.stateHttpService.collection({
      page: 1,
      search: termSearch
    }).subscribe((result) => {
      this.syncOptionsInSelect(result.data);
    });
  }

  private replaceStateIdByStateName(id) {
    this.stateHttpService.show(id).subscribe((result) => {
      this.syncOptionsInSelect([result]);
    });
  }

  private syncOptionsInSelect(states) {
    const selectItems = [];
    if (states.length > 0) {
      states.forEach(state => {
        selectItems.push({
          id: state.id,
          name: state.name + ' / ' + state.abbreviation
        });
      });
    }
    this.items = selectItems;
  }

}
