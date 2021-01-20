var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CountryActions from '../store/country.action';
var CountryComponent = (function () {
    function CountryComponent(store) {
        this.store = store;
        this.regionsState$ = this.store.select(function (state) { return state.world; });
    }
    CountryComponent.prototype.ngOnInit = function () {
    };
    CountryComponent.prototype.getCountries = function (region) {
        this.store.dispatch(new CountryActions.SelectRegionAction(region));
    };
    CountryComponent.prototype.collapse = function (region) {
        this.store.dispatch(new CountryActions.CollapseRegionAction(region));
    };
    CountryComponent = __decorate([
        Component({
            selector: 'app-country-component',
            templateUrl: './country.component.html',
            styleUrls: ['./country.component.scss']
        }),
        __metadata("design:paramtypes", [Store])
    ], CountryComponent);
    return CountryComponent;
}());
export { CountryComponent };
//# sourceMappingURL=country.component.js.map