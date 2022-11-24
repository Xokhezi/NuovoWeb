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
  animations:[
    fade,
    fadeSideRed,
    fadeSideBlue,
    fadeSlider
    
  ]
})
export class LightColorSliderComponent implements OnInit {
 state:any;
  constructor() { 
    this.state="default";
  }

  ngOnInit(): void {
  }

  switchState(input:any)
  {
    this.state=input;
    console.log(this.state)
  }
  startTour()
{
  this.state='red';
}
test()
{
  this.state='test';
  console.log();
}

}
