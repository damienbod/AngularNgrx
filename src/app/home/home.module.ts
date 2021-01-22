import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './components/home.component';
import { HomeRoutes } from './home.routes';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ThingsEffects } from './store/things.effects';
import { thingsReducer } from './store/home.reducer';
import { homeStoreName } from './store/home.selectors';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HomeRoutes,
    StoreModule.forFeature(homeStoreName, thingsReducer),
    EffectsModule.forFeature([ThingsEffects]),
  ],

  declarations: [HomeComponent],

  exports: [HomeComponent],
})
export class HomeModule {}
