var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuration } from './../../app.constants';
var ThingService = (function () {
    function ThingService(http, configuration) {
        this.http = http;
        this.actionUrl = configuration.Server + 'api/things/';
        this.headers = new HttpHeaders();
        this.headers = this.headers.set('Content-Type', 'application/json');
        this.headers = this.headers.set('Accept', 'application/json');
    }
    ThingService.prototype.getAll = function () {
        return this.http.get(this.actionUrl, { headers: this.headers });
    };
    ThingService.prototype.getSingle = function (id) {
        return this.http.get(this.actionUrl + id, { headers: this.headers });
    };
    ThingService.prototype.add = function (thingToAdd) {
        var toAdd = JSON.stringify({ name: thingToAdd.name });
        return this.http.post(this.actionUrl, toAdd, { headers: this.headers });
    };
    ThingService.prototype.update = function (id, itemToUpdate) {
        return this.http
            .put(this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: this.headers });
    };
    ThingService.prototype.delete = function (id) {
        return this.http.delete(this.actionUrl + id, { headers: this.headers });
    };
    ThingService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, Configuration])
    ], ThingService);
    return ThingService;
}());
export { ThingService };
//# sourceMappingURL=thing-data.service.js.map