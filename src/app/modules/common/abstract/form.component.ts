import {ChangeDetectorRef, Input, OnChanges} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

export abstract class FormComponent implements OnChanges {

  @Input() form: FormGroup;

  constructor(private changeRef: ChangeDetectorRef) {
  }

  static makeForm(formBuild: FormBuilder) {
  }

  abstract get fieldOptions()

  ngOnChanges(): void {
    this.changeRef.detectChanges();
  }

}
