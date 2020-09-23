import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private titleService: Title, private router: Router, private activatedRoute: ActivatedRoute) { }
  title = 'de-atol';

  ngOnInit(): void {
    const title = 'title';
    const pageTitle = this.titleService.getTitle();
    this.router
      .events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          const child = this.activatedRoute.firstChild;
          if (child.snapshot.data[title]) {
            return child.snapshot.data[title];
          }
          return pageTitle;
        })
      ).subscribe((ttl: string) => {
        this.titleService.setTitle(ttl);
      });
  }

  public setTitle( newTitle: string): void {
    this.titleService.setTitle( newTitle );
  }
}
