import './extensions/rxjs-extensions';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { AppComponent }         from './app.component';
import { UrlComponent }      from './url/url.component';
import { UrlDetailComponent }  from './url-detail/url-detail.component';
import { UrlService }          from './url/url.service';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    UrlDetailComponent,
    UrlComponent,
  ],
  providers: [ UrlService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
