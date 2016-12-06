import { Injectable } from '@angular/core';
import { Url } from './url';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';


@Injectable()
export class UrlService {
  private clipUrl = 'http://localhost:8080/clip/all';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http , private router:Router) { }

  getUrls(): Promise<Url[]> {
   return this.http.get(this.clipUrl)
              .toPromise()
              .then(response => <Url[]> response.json())
              .catch(this.handleError);
            }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
    }
  private handleSearchError(error: any): Promise<any> {
    return Promise.reject(alert("the url does not exist"));
    }
  private handleCreateError(error: any): Promise<any> {
    return Promise.reject(alert("invalid Url Format"));
    }
  getUrl(url: string): Promise<Url> {
    return this.http.put("http://localhost:8080/clip",url,{headers:this.headers})
               .toPromise()
               .then(response => <Url[]> response.json())
               .catch(this.handleError);
       }

create(term: string): Promise<Url> {
    return this.http.post("http://localhost:8080/clip",term,{headers:this.headers})
               .toPromise()
               .then((response) => {
                 let link = ['/detail', response.json().url];
                 this.router.navigate(link);
               })
               .catch(this.handleCreateError);
}
search(term: string): Promise<Url> {
    return this.http.put("http://localhost:8080/clip",term,{headers:this.headers})
               .toPromise()
               .then((response) => {
                 console.log(term);
                 let link = ['/detail', term];
                 this.router.navigate(link);
               })
               .catch(this.handleSearchError);
             }
}
