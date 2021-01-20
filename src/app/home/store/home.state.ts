import { Thing } from './../../models/thing';

export interface HomeState {
    home: HomeStateContainer;
}

export interface HomeStateContainer {
    things: Thing[];
    selectedThing: Thing;
}
