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
    this.meta.updateTag({ name: 'description', content: 'Tijdens de vaarten kunt u een drankje nemen en kan ik u het een en ander vertellen over hetgeen u onderweg te zien krijgt.'});
  }

}
