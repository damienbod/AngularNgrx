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
var CountryService = (function () {
    function CountryService(http) {
        this.http = http;
        this.headers = new HttpHeaders();
    }
    CountryService.prototype.getAll = function () {
        return this.http.get('https://restcountries.eu/rest/v2/all', { headers: this.headers });
    };
    CountryService.prototype.getAllPerRegion = function (region) {
        return this.http.get("https://restcountries.eu/rest/v2/region/" + region, { headers: this.headers });
    };
    CountryService.prototype.getAllPerSubRegion = function (subRegion) {
        return this.http.get("https://restcountries.eu/rest/v2/subregion/" + subRegion, { headers: this.headers });
    };
    CountryService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], CountryService);
    return CountryService;
}());
export { CountryService };
//# sourceMappingURL=country.service.js.map