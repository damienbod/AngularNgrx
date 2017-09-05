import { HomeState } from './home.state';
import { Thing } from './../../models/thing';
import { Action } from "@ngrx/store";
import * as thingsAction from './thing.action';

export const initialState: HomeState = {
    things: [],
    selectedThing: new Thing()
};

export function thingsReducer(state = initialState, action: thingsAction.Actions): HomeState {
    switch (action.type) {

        //case thingsAction.AddCompleteAction: {
        //    return Object.assign({}, state, {
        //        foodItems: state.things.concat(thingsAction.AddCompleteAction.things),
        //        selectedItem: new Thing()
        //    });
        //}
        default:
            return state;

    }
}