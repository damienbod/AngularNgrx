var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CountryComponent } from './components/country.component';
import { CountryRoutes } from './country.routes';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CountryEffects } from './store/country.effects';
import { countryReducer } from './store/country.reducer';
var CountryModule = (function () {
    function CountryModule() {
    }
    CountryModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                HttpClientModule,
                CountryRoutes,
                StoreModule.forFeature('world', countryReducer),
                EffectsModule.forFeature([CountryEffects])
            ],
            declarations: [
                CountryComponent
            ],
            exports: [
                CountryComponent
            ]
        })
    ], CountryModule);
    return CountryModule;
}());
export { CountryModule };
//# sourceMappingURL=country.module.js.map