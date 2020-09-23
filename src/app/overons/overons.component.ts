import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-overons',
  templateUrl: './overons.component.html',
  styleUrls: ['./overons.component.css']
})
export class OveronsComponent implements OnInit {

  constructor(private meta: Meta) { }

  ngOnInit(): void {
    this.meta.updateTag({ name: 'description', content: 'Mijn comfortabele boot is verwarmd en uitgerust met toiletvoorziening, bar en geluidsinstallatie. Daarnaast heeft het schip een groot dek, waar u tijdens zonnige dagen heerlijk kunt vertoeven.'});
  }

}
