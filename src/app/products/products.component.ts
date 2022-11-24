import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';
import { slideProducts } from './products.animations';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [
    slideProducts
  ]
})
export class ProductsComponent {
  products: any;
  text: any;
  results: any;
  entry: any;
  constructor() {
    this.text = 'lorem ipsum peckum tadum tudum tamtum jedum';
    this.products = [
      { id: 1, name: 'Rd1500', category: 'red', summary: this.text, url: 'assets/red.png' },
      { id: 2, name: 'Rd500', category: 'blue', summary: this.text, url: 'assets/red.png' },
      { id: 3, name: 'Rd3000', category: 'blue', summary: this.text, url: 'assets/red.png' },
      { id: 4, name: 'Rd6000', category: 'red', summary: this.text, url: 'assets/red.png' },
    ]
    this.results = this.products;
  }

  search(input: string) {
    this.results = []
    let search = input.toUpperCase();
    let splitSearch = search.toString().split('');

    for (let product of this.products) {
      let category = product.category.toUpperCase();
      let split=category.toString().split('');  
      
      let name = product.name.toUpperCase();
      let splitName=name.toString().split('');   
      
      //category check   
      if (this.validate(splitSearch,split))
      {
        if(this.results.includes(product)==false)
          this.results.push(product);  
      }
      //name check
      if (this.validate(splitSearch, splitName))  
      {
        if(this.results.includes(product)==false)
          this.results.push(product);  
      }
      
    }
    
    if (this.results.length == 0)
      this.results = this.products;

      
  }

  validate(splitSearch:any , split:any) { 
    let check = false;
    let numberOfChecks=0;   
    for (let letter of splitSearch) {
      if (split.includes(letter))
        numberOfChecks++;
      if(numberOfChecks==splitSearch.length)
        check = true;
    }
    return check;
  }

  

}
