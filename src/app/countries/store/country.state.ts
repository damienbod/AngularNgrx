import { Country } from '../../models/country';

export interface CountryState {
  countries: Country[];
  loading: boolean;
}
