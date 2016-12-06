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
var router_1 = require('@angular/router');
var url_service_1 = require('./url.service');
var UrlComponent = (function () {
    function UrlComponent(router, urlService) {
        this.router = router;
        this.urlService = urlService;
    }
    UrlComponent.prototype.getUrls = function () {
        var _this = this;
        this.urlService.getUrls().then(function (urls) { return _this.urls = urls; });
    };
    UrlComponent.prototype.ngOnInit = function () {
        this.getUrls();
    };
    UrlComponent.prototype.onSelect = function (url) {
        this.selectedUrl = url;
    };
    UrlComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedUrl.url]);
    };
    UrlComponent.prototype.create = function (url) {
        var _this = this;
        url = url.trim();
        console.log(url);
        if (!url) {
            return;
        }
        this.urlService.create(url)
            .then(function (url) {
            _this.urls.push(url);
            _this.selectedUrl = null;
        });
    };
    UrlComponent.prototype.search = function (url) {
        this.urlService
            .search(url);
    };
    UrlComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-urls',
            templateUrl: 'url.component.html',
            styleUrls: ['url.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, url_service_1.UrlService])
    ], UrlComponent);
    return UrlComponent;
}());
exports.UrlComponent = UrlComponent;
//# sourceMappingURL=url.component.js.map