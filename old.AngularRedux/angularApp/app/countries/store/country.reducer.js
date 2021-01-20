import * as countryAction from './country.action';
export var initialState = {
    regions: [
        { name: 'Africa', expanded: false, countries: [] },
        { name: 'Americas', expanded: false, countries: [] },
        { name: 'Asia', expanded: false, countries: [] },
        { name: 'Europe', expanded: false, countries: [] },
        { name: 'Oceania', expanded: false, countries: [] }
    ]
};
export function countryReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case countryAction.SELECTREGION_COMPLETE:
            return Object.assign({}, state, {
                regions: state.regions.map(function (item) {
                    return item.name === action.region.name ? Object.assign({}, item, action.region) : item;
                })
            });
        case countryAction.COLLAPSEREGION:
            action.region.expanded = false;
            return Object.assign({}, state, {
                regions: state.regions.map(function (item) {
                    return item.name === action.region.name ? Object.assign({}, item, action.region) : item;
                })
            });
        default:
            return state;
    }
}
//# sourceMappingURL=country.reducer.js.map