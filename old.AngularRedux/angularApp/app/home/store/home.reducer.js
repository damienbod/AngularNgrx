import { Thing } from './../../models/thing';
import * as thingsAction from './thing.action';
export var initialState = {
    home: {
        things: [],
        selectedThing: new Thing()
    }
};
export function thingsReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case thingsAction.ADD_COMPLETE: {
            return Object.assign({}, state, {
                home: {
                    things: state.home.things.concat(action.thing),
                    selectedThing: new Thing()
                }
            });
        }
        case thingsAction.DELETE_COMPLETE: {
            return Object.assign({}, state, {
                home: {
                    things: state.home.things.filter(function (item) { return item.id !== action.thing.id; }),
                    selectedThing: new Thing()
                }
            });
        }
        case thingsAction.SELECTALL_COMPLETE:
            return Object.assign({}, state, {
                home: {
                    things: action.things,
                    selectedItem: new Thing()
                }
            });
        default:
            return state;
    }
}
//# sourceMappingURL=home.reducer.js.map