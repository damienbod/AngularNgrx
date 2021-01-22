import { Country } from './../../models/country';
import { createAction, props } from '@ngrx/store';

export const getAllCountriesAction = createAction('[countries] get countries');
export const getAllCountriesFinishedAction = createAction(
  '[countries] get countries Finished',
  props<{ payload: Country[] }>()
);

export const countriesErrorAction = createAction(
  '[countries] countries Error',
  props<{ payload: any }>()
);
