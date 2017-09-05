import { HomeState } from './home.state';
import { Thing } from './../../models/thing';
import { Action } from '@ngrx/store';
import * as thingsAction from './thing.action';

export const initialState: HomeState = {
    things: [],
    selectedThing: new Thing()
};

export function thingsReducer(state = initialState, action: thingsAction.Actions): HomeState {
    switch (action.type) {

        case thingsAction.ADD_COMPLETE: {
            return Object.assign({}, state, {
                things: state.things.concat(action.thing),
                selectedThing: new Thing()
            });
        }

        case thingsAction.SELECTALL_COMPLETE:
            return Object.assign({}, state, {
                things: action.things,
                selectedItem: new Thing()
            });


        default:
            return state;

    }
}
