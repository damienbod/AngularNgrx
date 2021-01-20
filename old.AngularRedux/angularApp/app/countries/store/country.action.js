export var SELECTALL = '[countries] Select All';
export var SELECTALL_COMPLETE = '[countries] Select All Complete';
export var SELECTREGION = '[countries] Select Region';
export var SELECTREGION_COMPLETE = '[countries] Select Region Complete';
export var COLLAPSEREGION = '[countries] COLLAPSE Region';
var SelectRegionAction = (function () {
    function SelectRegionAction(region) {
        this.region = region;
        this.type = SELECTREGION;
    }
    return SelectRegionAction;
}());
export { SelectRegionAction };
var SelectRegionCompleteAction = (function () {
    function SelectRegionCompleteAction(region) {
        this.region = region;
        this.type = SELECTREGION_COMPLETE;
    }
    return SelectRegionCompleteAction;
}());
export { SelectRegionCompleteAction };
var CollapseRegionAction = (function () {
    function CollapseRegionAction(region) {
        this.region = region;
        this.type = COLLAPSEREGION;
    }
    return CollapseRegionAction;
}());
export { CollapseRegionAction };
//# sourceMappingURL=country.action.js.map