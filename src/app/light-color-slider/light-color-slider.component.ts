import { ProductsService } from './../services/products.service';
import { fade, fadeSideBlue, fadeSideRed, fadeSlider } from './light-color.slider.animations';
import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'light-color-slider',
  templateUrl: './light-color-slider.component.html',
  styleUrls: ['./light-color-slider.component.css'],
  animations: [
    fade,
    fadeSideRed,
    fadeSideBlue,
    fadeSlider

  ]
})
export class LightColorSliderComponent implements OnInit {
  state: any;
  id = 0;
  product: any;
  products: any;
  constructor(private service: ProductsService) {
    this.state = "default";
    this.products = service.getProducts();
    this.product = service.getCategory('red')[0];
  }

  ngOnInit(): void {
  }

  switchState(input: any) {
    this.state = input;
    this.id = 0;
    this.product = this.service.getCategory(input)[0];
    console.log(this.state)
  }
  startTour() {
    this.state = 'red';
  }
  switchProduct(method: any, category: any) {
    let prods: any;

    if (category === 'red')
      prods = this.service.getCategory('red');
    else if (category === 'blue')
      prods = this.service.getCategory('blue');

    if (method === 'next') {
      if (this.id < prods.length - 1)
        this.id++
    }
    else if (method === 'previous') {
      if (this.id != 0)
        this.id--;
    }

    this.product = prods[this.id];
    }
}
