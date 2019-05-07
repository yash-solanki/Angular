import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

// productsForm: FormGroup;
// products = [
//   {
//     'brand' : 'apple'
//   },
//   {
//     'brand' : 'xiomi'
//   },
//   {
//     'brand' : 'samsung'
//   }
// ];

myForm: FormGroup;

constructor( private fb: FormBuilder ) {}

  ngOnInit() {
    // this.createForm(this.products);

    this.myForm = this.fb.group({
      email: '',
      phones: this.fb.array([])
    });
  }

  get phoneForms() {
    return this.myForm.get('phones') as FormArray
  }

  addPhone() {
    const phone = this.fb.group({
      area: [],
      prefix: [],
      line: []
    });

    this.phoneForms.push(phone);
  }

  deletePhone(i) {
    this.phoneForms.removeAt(i);
  }

  onSubmit() {
    console.log(this.phoneForms.value);
  }

  // public createForm(products) {
  //   let arr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     arr.push(this.buildProduct(products[i]));
  //   }
  //   this.productsForm = this.fb.group({
  //     catagory: [''],
  //     brands: this.fb.array(arr)
  //   });
  // }

  // buildProduct(product): FormGroup {
  //   return this.fb.group({
  //     title: [product.brand],
  //     value: ['']
  //   });
  // }

  // showData() {
  //   console.log(this.productsForm.value);
  // }

}
