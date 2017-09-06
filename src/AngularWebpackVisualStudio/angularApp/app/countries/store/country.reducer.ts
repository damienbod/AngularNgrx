import { CountryState } from './country.state';
import { Country } from './../../models/country';
import { Region } from './../../models/region';
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

        case countryAction.SELECTREGION: {
             return Object.assign({}, state, {
                region: state.region.map((item: Region) => {
                    return item.name === action.region.name ? Object.assign({}, item, action.region ) : item;
                })
             });
        }

        default:
            return state;

    }
}
