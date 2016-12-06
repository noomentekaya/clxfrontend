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
var common_1 = require('@angular/common');
var url_service_1 = require('../url/url.service');
var UrlDetailComponent = (function () {
    function UrlDetailComponent(urlService, route, location) {
        this.urlService = urlService;
        this.route = route;
        this.location = location;
    }
    UrlDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.url = params['url'];
            _this.urlService.getUrl(_this.url)
                .then(function (tinyUrl) { return _this.tinyUrl = tinyUrl; });
        });
    };
    UrlDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    UrlDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-url-detail',
            templateUrl: 'url-detail.component.html',
            styleUrls: ['url-detail.component.css']
        }), 
        __metadata('design:paramtypes', [url_service_1.UrlService, router_1.ActivatedRoute, common_1.Location])
    ], UrlDetailComponent);
    return UrlDetailComponent;
}());
exports.UrlDetailComponent = UrlDetailComponent;
//# sourceMappingURL=url-detail.component.js.map