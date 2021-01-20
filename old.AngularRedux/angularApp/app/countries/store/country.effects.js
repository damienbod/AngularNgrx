var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { catchError, map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import * as countryAction from './country.action';
import { CountryService } from '../../core/services/country.service';
var CountryEffects = (function () {
    function CountryEffects(countryService, actions$) {
        var _this = this;
        this.countryService = countryService;
        this.actions$ = actions$;
        this.getAllPerRegion$ = this.actions$.ofType(countryAction.SELECTREGION).pipe(switchMap(function (action) {
            return _this.countryService.getAllPerRegion((action).region.name).pipe(map(function (data) {
                var region = { name: action.region.name, expanded: true, countries: data };
                return new countryAction.SelectRegionCompleteAction(region);
            }), catchError(function (error) { return of(error); }));
        }));
    }
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], CountryEffects.prototype, "getAllPerRegion$", void 0);
    CountryEffects = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [CountryService,
            Actions])
    ], CountryEffects);
    return CountryEffects;
}());
export { CountryEffects };
//# sourceMappingURL=country.effects.js.map