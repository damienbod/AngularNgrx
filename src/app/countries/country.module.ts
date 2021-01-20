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

@NgModule({
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

export class CountryModule { }
