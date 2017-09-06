import { CountryState } from './country.state';
import { Country } from './../../models/country';
import { Action } from '@ngrx/store';
import * as countryAction from './country.action';

export const initialState: CountryState = {
    countries: [],
    region: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
};

export function countryReducer(state = initialState, action: countryAction.Actions): CountryState {
    switch (action.type) {

        case countryAction.SELECTALL_COMPLETE:
            return Object.assign({}, state, {
                countries: action.countries,
                region: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
            });


        default:
            return state;

    }
}
