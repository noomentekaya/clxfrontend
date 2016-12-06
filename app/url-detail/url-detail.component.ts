import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Url }         from '../url/url';
import { UrlService }  from '../url/url.service';
@Component({
  moduleId: module.id,
  selector: 'my-url-detail',
  templateUrl: 'url-detail.component.html',
  styleUrls: [ 'url-detail.component.css' ]
})
export class UrlDetailComponent implements OnInit {
  tinyUrl: Url;
  url : string ;
  constructor(
    private urlService: UrlService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
      this.route.params.forEach((params: Params) => {
      this.url = params['url'];
      this.urlService.getUrl(this.url)
        .then(tinyUrl => this.tinyUrl = tinyUrl);
    });
  }

  goBack(): void {
    this.location.back();
  }

}
