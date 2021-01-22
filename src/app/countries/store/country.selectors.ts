import {
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { Country } from './../../models/country';
import { Region } from './../../models/region';
import { CountryState } from './country.state';

export const worldStoreName = 'world';

export const selectWorldStore = createFeatureSelector(worldStoreName);

export const selectLoading = createSelector(
  selectWorldStore,
  (state: CountryState) => state.loading
);

export const selectCountries = createSelector(
  selectWorldStore,
  (state: CountryState) => state.countries
);

export const selectRegions = createSelector(
  selectCountries,
  (countries: Country[]) => {
    const allRegions = countries.map((x) => x.region);

    const allRegionsWithoutDuplicates = [...new Set(allRegions)];

    return allRegionsWithoutDuplicates.map((region) => {
      const allCountriesOfRegion = countries.filter((x) => x.region === region);

      return {
        name: region,
        countries: allCountriesOfRegion,
      } as Region;
    });
  }
);
