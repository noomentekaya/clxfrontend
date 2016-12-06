"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var router_1 = require('@angular/router');
var UrlService = (function () {
    function UrlService(http, router) {
        this.http = http;
        this.router = router;
        this.clipUrl = 'http://localhost:8080/clip/all'; // URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    UrlService.prototype.getUrls = function () {
        return this.http.get(this.clipUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UrlService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    UrlService.prototype.handleSearchError = function (error) {
        return Promise.reject(alert("the url does not exist"));
    };
    UrlService.prototype.handleCreateError = function (error) {
        return Promise.reject(alert("invalid Url Format"));
    };
    UrlService.prototype.getUrl = function (url) {
        return this.http.put("http://localhost:8080/clip", url, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UrlService.prototype.create = function (term) {
        var _this = this;
        return this.http.post("http://localhost:8080/clip", term, { headers: this.headers })
            .toPromise()
            .then(function (response) {
            var link = ['/detail', response.json().url];
            _this.router.navigate(link);
        })
            .catch(this.handleCreateError);
    };
    UrlService.prototype.search = function (term) {
        var _this = this;
        return this.http.put("http://localhost:8080/clip", term, { headers: this.headers })
            .toPromise()
            .then(function (response) {
            console.log(term);
            var link = ['/detail', term];
            _this.router.navigate(link);
        })
            .catch(this.handleSearchError);
    };
    UrlService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], UrlService);
    return UrlService;
}());
exports.UrlService = UrlService;
//# sourceMappingURL=url.service.js.map