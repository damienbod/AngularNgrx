import { HomeState } from './home.state';
import { Thing } from './../../models/thing';

export const initialState: HomeState = {
    things: [],
    selectedThing: new Thing()
};
