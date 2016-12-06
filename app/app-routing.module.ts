import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UrlComponent }      from './url/url.component';
import { UrlDetailComponent }  from './url-detail/url-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/urls', pathMatch: 'full' },
  { path: 'detail/:url', component: UrlDetailComponent },
  { path: 'urls',     component: UrlComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
