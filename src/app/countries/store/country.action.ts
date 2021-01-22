import { Country } from './../../models/country';
import { createAction, props } from '@ngrx/store';
import { Region } from './../../models/region';

export const getAllCountriesAction = createAction('[countries] get countries');
export const getAllCountriesFinishedAction = createAction(
  '[countries] get countries Finished',
  props<{ payload: Country[] }>()
);
export const getRegionAction = createAction(
  '[Region] get Region',
  props<{ payload: Region }>()
);
export const getRegionFinishedAction = createAction(
  '[Region] get Region Finished',
  props<{ payload: Region }>()
);
