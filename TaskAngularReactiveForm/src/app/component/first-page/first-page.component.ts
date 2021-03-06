import { Component, OnInit } from '@angular/core';

import {FormBuilder, Validators, FormGroup, FormArray, FormControl, ReactiveFormsModule} from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  currentYear;
  currentMonth;
  months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  fromMonths = [];
  fromYears = [];
  toMonths = [];
  toYears = [];

  // New Code
  // public mainForm: FormGroup;
  // public subForm: FormArray;

  // get dataFormGroup() {
  //   return this.mainForm.get('randomData') as FormArray;
  // }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
    this.currentMonth = new Date().getMonth();
    for (let i = 0; i < 10; i++) {
      this.fromYears.push(this.currentYear + i );
    }

    // new Code

  //   this.mainForm = this.fb.group({
  //     fromYear: [null, Validators.compose([Validators.required])],
  //     fromMonth: [null, Validators.compose([Validators.required])],
  //     toYear: [null, Validators.compose([Validators.required])],
  //     toMonth: [null, Validators.compose([Validators.required])],
  //     randomData: this.fb.array([this.createRandomData()])
  //   });

  //   this.subForm = this.mainForm.get('randomData') as FormArray;
  }

  // new Code
  // createRandomData(): FormGroup {
  //   let tempMonth = this.from.month;
  //   let tempYear = parseInt(this.from.year);
  //   return this.fb.group({
  //     date: `${tempMonth} ${tempYear}`,
  //     value1: [''],
  //     value2: [''],
  //     value3: ['']
  //   });
  // }

  // getRandomDataFromGroup(index): FormGroup {
  //   // this.subForm = this.form.get('randomData') as FormArray;
  //   const formGroup = this.subForm.controls[index] as FormGroup;
  //   return formGroup;
  // }

  // FOP = [];

  // submit() {
  //   this.FOP = this.mainForm.value;
  //   console.log(this.FOP);
  // }

  onSubmit() {
    console.log(this.form);
    console.log(this.form.value);
  }

// tslint:disable-next-line: member-ordering
  form = new FormGroup({
    fromYear: new FormControl(),
    fromMonth: new FormControl(),
    toYear: new FormControl(),
    toMonth: new FormControl()
  });

// tslint:disable-next-line: member-ordering
  data = new FormGroup({
    value1: new FormControl(),
    value2: new FormControl(),
    value3: new FormControl()
  });

  dataOutput( value: string ): void {
    // const result = Object.assign({}, this.data.value);
    // const final = this.data.value;
    // console.log(final);
    console.log(value);
  }

// tslint:disable-next-line: member-ordering
  from = {
    year: '',
    month: ''
  };

// tslint:disable-next-line: member-ordering
  to = {
    year: '',
    month: ''
  };

  getFromMonths() {
    this.from.month = '';
    if (this.from.year === this.currentYear.toString()) {
      this.fromMonths = [];
      this.fromMonths = this.fromMonths.concat(this.months);
      this.fromMonths.splice(0, this.currentMonth);

      // this.mainForm.patchValue({fromMonth: this.fromMonths.splice(0, this.currentMonth)});

    } else if (this.from.year > this.currentYear) {
      this.fromMonths = this.months;
    } else {
      this.fromMonths = [];
    }
  }

  getToYears() {
    this.to.year = '';
    this.toYears = [];
    this.toYears = this.toYears.concat(this.fromYears);
    this.toYears.splice(0, this.fromYears.indexOf(parseInt(this.from.year)));
  }

  getToMonths() {
    this.to.month = '';
    if (this.to.year === this.from.year) {
        this.toMonths = [];
        this.toMonths = this.toMonths.concat(this.months);
        this.toMonths.splice(0, this.months.indexOf(this.from.month));
    } else if (this.to.year > this.from.year) {
        this.toMonths = this.months;
    } else {
        this.toMonths = [];
    }
  }

// tslint:disable-next-line: member-ordering
  records = [];

  generateRecords() {
    let tempMonth = this.from.month;
    let tempYear = parseInt(this.from.year);
    this.records = [];
// tslint:disable-next-line: max-line-length
    const diff = moment(`${this.months.indexOf(this.to.month) + 1}/${parseInt(this.to.year)}`, 'M/YYYY').diff(moment(`${this.months.indexOf(this.from.month) + 1}/${parseInt(this.from.year)}`, 'M/YYYY'), 'months', true);

    const numberOfMonths = diff + 1;
    for (let i = 0; i < numberOfMonths; i++) {

     // this.subForm.push(this.createRandomData());

      this.records.push({
        date: `${tempMonth} ${tempYear}`,
        value1: '',
        value2: '',
        value3: ''
      });

      tempMonth = this.months[this.months.indexOf(tempMonth) + 1];
      if (!tempMonth) {
        tempMonth = this.months[0];
        tempYear = tempYear + 1;
      }
    }
  }

// tslint:disable-next-line: member-ordering
  Months = [];

  finalOutput() {
    this.Months = this.records;
    console.log(this.Months);
  }

}
