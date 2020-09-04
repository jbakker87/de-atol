import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';


@Component({
  selector: 'app-feesten',
  templateUrl: './feesten.component.html',
  styleUrls: ['./feesten.component.css'],
})
export class FeestenComponent implements OnInit {

  slides = 
  [
      { 'image': 'https://gsr.dev/material2-carousel/assets/demo.png' }, 
      { 'image': 'https://gsr.dev/material2-carousel/assets/demo.png' },
      { 'image': 'https://gsr.dev/material2-carousel/assets/demo.png' }, 
      { 'image': 'https://gsr.dev/material2-carousel/assets/demo.png' }, 
      { 'image': 'https://gsr.dev/material2-carousel/assets/demo.png' }
    ];

  constructor() {}

  ngOnInit(): void {
  } 
}
