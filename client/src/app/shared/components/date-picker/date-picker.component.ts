import { Component, Input, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements ControlValueAccessor{
  @Input() label = '';
  @Input() maxDate!: Date;
  bsConfig!: Partial<BsDatepickerConfig>


  constructor(@Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this
    this.bsConfig = {
      containerClass: 'theme-dark-blue',
      dateInputFormat: 'DD MMMM YYYY'
    }
  }

  writeValue(obj: any): void {}
  
  registerOnChange(fn: any): void {}

  registerOnTouched(fn: any): void {}


  get control() {
    return this.ngControl.control as FormControl;
  }

}
