import { Action } from '@ngrx/store';
import { Country } from './../../models/country';

export const SELECTALL = '[countries] Select All';
export const SELECTALL_COMPLETE = '[countries] Select All Complete';

export class SelectAllAction implements Action {
    readonly type = SELECTALL;

    constructor() { }
}

export class SelectAllCompleteAction implements Action {
    readonly type = SELECTALL_COMPLETE;

    constructor(public countries: Country[]) { }
}

export type Actions
    = SelectAllAction
    | SelectAllCompleteAction;

