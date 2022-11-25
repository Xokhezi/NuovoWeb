import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 products=[
  { id: 1, name: 'Rd1500', category: 'red', summary: 'lorem ipsum peckum tadum tudum tamtum jedum', url: 'assets/red.png' },
  { id: 2, name: 'Rd500', category: 'blue', summary:  'lorem ipsum peckum tadum tudum tamtum jedum', url: 'assets/blue.png' },
  { id: 3, name: 'Rd3000', category: 'blue', summary: 'lorem ipsum peckum tadum tudum tamtum jedum', url: 'assets/blue.png' },
  { id: 4, name: 'Rd6000', category: 'red', summary: 'lorem ipsum peckum tadum tudum tamtum jedum', url: 'assets/red.png' },
]
  constructor() { }

  getProducts()
  {
    return this.products;
  }
  getProduct(id:number)
  {
    let product = this.products.find((obj: { id: any; })=>obj.id===id)
    return product;
  }
  getCategory(category:string)
  {
    let products = this.products.filter((obj: { category: any; })=>obj.category===category)
    return products;
  }
}
