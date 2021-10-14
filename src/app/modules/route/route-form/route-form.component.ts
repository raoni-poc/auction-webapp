import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormComponent} from '../../common/abstract/formComponent';
import {Subject} from 'rxjs';
import {CityHttpService} from '../../city/city-http.service';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-route-form',
  templateUrl: './route-form.component.html',
  styleUrls: ['./route-form.component.css']
})
export class RouteFormComponent extends FormComponent implements OnInit{
  items = [];
  searchInput = new Subject<string>();
  protected selectOriginName: string;
  protected selectDestination: string;


  constructor(protected changeRef: ChangeDetectorRef,
              private selectOriginService: CityHttpService,
              private selectDestinationService: CityHttpService) {
    super(changeRef);
    this.selectOriginName = 'address_origin_id';
    this.selectDestination = 'address_destination_id';
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
    const formControl = this.form.get(this.selectOriginName);
    if (!isNaN(event) && formControl.pristine) {
      this.replaceIdByName(event);
    }
  }

  private suggestOptions(termSearch) {
    this.selectOriginService.collection({
      page: 1,
      search: termSearch
    }).subscribe((result) => {
      this.syncOptionsInSelect(result.data);
    });
  }

  private replaceIdByName(id) {
    this.selectOriginService.show(id).subscribe((result) => {
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
