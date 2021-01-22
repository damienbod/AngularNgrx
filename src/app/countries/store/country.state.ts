import { Country } from '../../models/country';
import { Region } from '../../models/region';

export interface CountryState {
    countries: Country[]
    loading: boolean;
}
