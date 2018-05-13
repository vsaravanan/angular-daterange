import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

import {SatDatepickerInputEvent, SatDatepickerRangeValue} from 'saturn-datepicker';
/** @title Datepicker selected value */
@Component({
  selector: 'datepicker-value-example',
  templateUrl: 'datepicker-value-example.html',
  styleUrls: ['datepicker-value-example.css'],
})
export class DatepickerValueExample {
    date: SatDatepickerRangeValue<Date> ;
    lastDateInput: SatDatepickerRangeValue<Date>  | null;
    lastDateChange: SatDatepickerRangeValue<Date>  | null;

    onDateInput = (e: SatDatepickerInputEvent<Date>) => this.lastDateInput = e.value as SatDatepickerRangeValue<Date>;
    onDateChange = (e: SatDatepickerInputEvent<Date>) => this.lastDateChange = e.value as SatDatepickerRangeValue<Date>;
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */