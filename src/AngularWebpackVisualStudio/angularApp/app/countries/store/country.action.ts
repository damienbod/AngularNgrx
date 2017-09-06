import { Action } from '@ngrx/store';
import { Country } from './../../models/country';

export const SELECTALL = '[country] Select All';
export const SELECTALL_COMPLETE = '[country] Select All Complete';

export class SelectAllAction implements Action {
    readonly type = SELECTALL;

    constructor() { }
}

export class SelectAllCompleteAction implements Action {
    readonly type = SELECTALL_COMPLETE;

    constructor(public country: Country[]) { }
}

export type Actions
    = SelectAllAction
    | SelectAllCompleteAction;

