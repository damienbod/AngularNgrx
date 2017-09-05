import { Thing } from './../../models/thing';

export interface HomeState {
    things: Thing[],
    selectedThing: Thing,
};