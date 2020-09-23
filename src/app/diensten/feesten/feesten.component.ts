import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';


@Component({
  selector: 'app-feesten',
  templateUrl: './feesten.component.html',
  styleUrls: ['./feesten.component.css'],
})
export class FeestenComponent implements OnInit {

  slides =
  [
      { image: 'https://gsr.dev/material2-carousel/assets/demo.png' },
      { image: 'https://gsr.dev/material2-carousel/assets/demo.png' },
      { image: 'https://gsr.dev/material2-carousel/assets/demo.png' },
      { image: 'https://gsr.dev/material2-carousel/assets/demo.png' },
      { image: 'https://gsr.dev/material2-carousel/assets/demo.png' }
    ];

  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.updateTag({ name: 'description', content: 'Laat het vaste land achterwege voor een intieme ervaring met rondvaartbedrijf De Atol. Boek nu om een ​​plek te reserveren.' });

  }
}
