import {ChangeDetectorRef, Component, Input, OnChanges} from '@angular/core';
import {FormGroup} from '@angular/forms';
import userFieldOptions from './user-fields-options';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnChanges {

  @Input() form: FormGroup;

  constructor(private changeRef: ChangeDetectorRef) {
  }

  ngOnChanges(): void {
    this.changeRef.detectChanges();
  }

  get fieldOptions(): any {
    return userFieldOptions;
  }

}
