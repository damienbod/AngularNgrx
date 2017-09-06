import { CountryState } from './country.state';
import { Country } from './../../models/country';
import { Action } from '@ngrx/store';
import * as countryAction from './country.action';

export const initialState: CountryState = {
    countries: [],
    region: [
        { name: 'Africa', expanded:  false },
        { name: 'Americas', expanded: false },
        { name: 'Asia', expanded: false },
        { name: 'Europe', expanded: false },
        { name: 'Oceania', expanded: false }
    ]
};

export function countryReducer(state = initialState, action: countryAction.Actions): CountryState {
    switch (action.type) {

        case countryAction.SELECTALL_COMPLETE:
            return Object.assign({}, state, {
                countries: action.countries,
                region: [
                    { name: 'Africa', expanded:  false },
                    { name: 'Americas', expanded: false },
                    { name: 'Asia', expanded: false },
                    { name: 'Europe', expanded: false },
                    { name: 'Oceania', expanded: false }
                ]
            });

        default:
            return state;

    }
}
