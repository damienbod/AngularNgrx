import { CountryState } from './country.state';
import { Country } from './../../models/country';
import { Region } from './../../models/region';
import { Action } from '@ngrx/store';
import * as countryAction from './country.action';

export const initialState: CountryState = {
    regions: [
        { name: 'Africa', expanded:  false, countries: [] },
        { name: 'Americas', expanded: false, countries: [] },
        { name: 'Asia', expanded: false, countries: [] },
        { name: 'Europe', expanded: false, countries: [] },
        { name: 'Oceania', expanded: false, countries: [] }
    ]
};

export function countryReducer(state = initialState, action: countryAction.Actions): CountryState {
    switch (action.type) {

        case countryAction.SELECTREGION_COMPLETE:
            return Object.assign({}, state, {
                regions: state.regions.map((item: Region) => {
                    return item.name === action.region.name ? Object.assign({}, item, action.region ) : item;
                })
            });

        case countryAction.COLLAPSEREGION:
            action.region.expanded = false;
            return Object.assign({}, state, {
                regions: state.regions.map((item: Region) => {
                    return item.name === action.region.name ? Object.assign({}, item, action.region ) : item;
                })
            });

        default:
            return state;

    }
}
