import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Url } from './url';
import { UrlService } from './url.service';

@Component({
  moduleId: module.id,
  selector: 'my-urls',
  templateUrl: 'url.component.html',
  styleUrls: [ 'url.component.css' ]
})
export class UrlComponent implements OnInit {
  urls: Url[];
  selectedUrl: Url;

  constructor(
    private router: Router,
    private urlService: UrlService) { }

  getUrls(): void {
    this.urlService.getUrls().then(urls => this.urls = urls);
  }

  ngOnInit(): void {
    this.getUrls();
  }

  onSelect(url: Url): void {
    this.selectedUrl = url;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedUrl.url]);
  }

  create(url: string): void {
  url = url.trim();
  console.log(url);
  if (!url) { return; }
  this.urlService.create(url)
    .then(url => {
      this.urls.push(url);
      this.selectedUrl = null;
    });
}

search(url: string): void {
  this.urlService
      .search(url);
}
}
