import { Action } from '@ngrx/store';
import { Country } from './../../models/country';
import { Region } from './../../models/region';

export const SELECTALL = '[countries] Select All';
export const SELECTALL_COMPLETE = '[countries] Select All Complete';
export const SELECTREGION = '[countries] Select Region';
export const SELECTREGION_COMPLETE = '[countries] Select Region Complete';

export const COLLAPSEREGION = '[countries] COLLAPSE Region';

export class SelectRegionAction implements Action {
    readonly type = SELECTREGION;

    constructor(public region: Region) { }
}

export class SelectRegionCompleteAction implements Action {
    readonly type = SELECTREGION_COMPLETE;

    constructor(public region: Region) { }
}

export class CollapseRegionAction implements Action {
    readonly type = COLLAPSEREGION;

    constructor(public region: Region) { }
}

export type Actions
    = SelectRegionAction
    | SelectRegionCompleteAction
    | CollapseRegionAction;

