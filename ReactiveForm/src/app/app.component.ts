import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

productsForm: FormGroup;
products = [
  {
    'brand' : 'apple'
  },
  {
    'brand' : 'xiomi'
  },
  {
    'brand' : 'samsung'
  }
];

constructor( private fb: FormBuilder ) {}

  ngOnInit() {
    this.createForm(this.products);
  }

  public createForm(products) {
    let arr = [];
    for (let i = 0; i < arr.length; i++) {
      arr.push(this.buildProduct(products[i]));
    }
    this.productsForm = this.fb.group({
      catagory: [''],
      brands: this.fb.array(arr)
    });
  }

  buildProduct(product): FormGroup {
    return this.fb.group({
      title: [product.brand],
      value: ['']
    });
  }

  showData() {
    console.log(this.productsForm.value);
  }

}
