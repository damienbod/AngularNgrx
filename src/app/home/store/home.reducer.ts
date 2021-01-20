import { HomeState } from './home.state';
import { Thing } from './../../models/thing';
import * as thingsAction from './thing.action';

export const initialState: HomeState = {
    home: {
        things: [],
        selectedThing: new Thing()
    }
};

export function thingsReducer(state = initialState, action: thingsAction.Actions): HomeState {
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
                    things: state.home.things.filter(item => item.id !== action.thing.id),
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
