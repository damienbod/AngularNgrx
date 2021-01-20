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
import { of, Observable } from 'rxjs';
import * as thingsAction from './thing.action';
import { ThingService } from '../../core/services/thing-data.service';
var ThingsEffects = (function () {
    function ThingsEffects(thingService, actions$) {
        var _this = this;
        this.thingService = thingService;
        this.actions$ = actions$;
        this.addThing$ = this.actions$.ofType(thingsAction.ADD).pipe(switchMap(function (action) {
            return _this.thingService.add(action.thing).pipe(map(function (data) {
                return new thingsAction.AddCompleteAction(data);
            }), catchError(function (error) { return of(error); }));
        }));
        this.deleteThing$ = this.actions$.ofType(thingsAction.DELETE).pipe(switchMap(function (action) {
            return _this.thingService.delete(action.thing.id).pipe(map(function () {
                return new thingsAction.DeleteCompleteAction(action.thing);
            }), catchError(function (error) { return of(error); }));
        }));
        this.getAll$ = this.actions$.ofType(thingsAction.SELECTALL).pipe(switchMap(function () {
            return _this.thingService.getAll().pipe(map(function (data) {
                return new thingsAction.SelectAllCompleteAction(data);
            }), catchError(function (error) { return of(error); }));
        }));
    }
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], ThingsEffects.prototype, "addThing$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], ThingsEffects.prototype, "deleteThing$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], ThingsEffects.prototype, "getAll$", void 0);
    ThingsEffects = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [ThingService,
            Actions])
    ], ThingsEffects);
    return ThingsEffects;
}());
export { ThingsEffects };
//# sourceMappingURL=things.effects.js.map