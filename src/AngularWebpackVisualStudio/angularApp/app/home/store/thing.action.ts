import { Action } from '@ngrx/store';
import { Thing } from './../../models/thing';

export const ADD = '[Thing] Add';
export const ADD_COMPLETE = '[Thing] Add Complete';

export const UPDATE = '[Thing] Update';
export const UPDATE_COMPLETE = '[Thing] Update Complete';

export const DELETE = '[Thing] Delete';
export const DELETE_COMPLETE = '[Thing] Delete Complete';

export const SELECT = '[Thing] Select';
export const SELECT_COMPLETE = '[Thing] Select Complete';

export const SELECTALL = '[Thing] Select All';
export const SELECTALL_COMPLETE = '[Thing] Select All Complete';

export class AddAction implements Action {
    readonly type = ADD;

    constructor(public thing: Thing) { }
}

export class AddCompleteAction implements Action {
    readonly type = ADD_COMPLETE;

    constructor(public thing: Thing) { }
}

export class UpdateAction implements Action {
    readonly type = UPDATE;

    constructor(public thing: Thing) { }
}

export class UpdateCompleteAction implements Action {
    readonly type = UPDATE_COMPLETE;

    constructor(public thing: Thing) { }
}

export class DeleteAction implements Action {
    readonly type = DELETE;

    constructor(public thing: Thing) { }
}

export class DeleteCompleteAction implements Action {
    readonly type = DELETE_COMPLETE;

    constructor(public thing: Thing) { }
}

export class SelectAction implements Action {
    readonly type = SELECT;

    constructor(public thing: Thing) { }
}

export class SelectCompleteAction implements Action {
    readonly type = SELECT_COMPLETE;

    constructor(public thing: Thing) { }
}

export class SelectAllAction implements Action {
    readonly type = SELECTALL;

    constructor() { }
}

export class SelectAllCompleteAction implements Action {
    readonly type = SELECTALL_COMPLETE;

    constructor(public things: Thing[]) { }
}

export type Actions
    = AddAction
    | AddCompleteAction
    | UpdateAction
    | UpdateCompleteAction
    | DeleteAction
    | DeleteCompleteAction
    | SelectAction
    | SelectCompleteAction
    | SelectAllAction
    | SelectAllCompleteAction;


