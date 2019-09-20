import {ChangeDetectorRef, Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import companyFieldOptions from '../company-fields-options';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnChanges {

  @Input() form: FormGroup;

  constructor(private changeRef: ChangeDetectorRef) {
  }

  ngOnChanges(): void {
    this.changeRef.detectChanges();
  }

  get fieldOptions(): any {
    return companyFieldOptions;
  }

}
