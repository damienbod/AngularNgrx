import { CountryState } from './country.state';
import { Region } from './../../models/region';
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
            const regionNew = {
              expanded: false,
              name: action.region.name,
              countries: [] //action.region.countries
            };
            return Object.assign({}, state, {
                regions: state.regions.map((item: Region) => {
                    return item.name === action.region.name ? Object.assign({}, item, regionNew ) : item;
                })
            });

        default:
            return state;

    }
}
