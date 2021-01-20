export var ADD = '[Thing] Add';
export var ADD_COMPLETE = '[Thing] Add Complete';
export var UPDATE = '[Thing] Update';
export var UPDATE_COMPLETE = '[Thing] Update Complete';
export var DELETE = '[Thing] Delete';
export var DELETE_COMPLETE = '[Thing] Delete Complete';
export var SELECT = '[Thing] Select';
export var SELECT_COMPLETE = '[Thing] Select Complete';
export var SELECTALL = '[Thing] Select All';
export var SELECTALL_COMPLETE = '[Thing] Select All Complete';
var AddAction = (function () {
    function AddAction(thing) {
        this.thing = thing;
        this.type = ADD;
    }
    return AddAction;
}());
export { AddAction };
var AddCompleteAction = (function () {
    function AddCompleteAction(thing) {
        this.thing = thing;
        this.type = ADD_COMPLETE;
    }
    return AddCompleteAction;
}());
export { AddCompleteAction };
var UpdateAction = (function () {
    function UpdateAction(thing) {
        this.thing = thing;
        this.type = UPDATE;
    }
    return UpdateAction;
}());
export { UpdateAction };
var UpdateCompleteAction = (function () {
    function UpdateCompleteAction(thing) {
        this.thing = thing;
        this.type = UPDATE_COMPLETE;
    }
    return UpdateCompleteAction;
}());
export { UpdateCompleteAction };
var DeleteAction = (function () {
    function DeleteAction(thing) {
        this.thing = thing;
        this.type = DELETE;
    }
    return DeleteAction;
}());
export { DeleteAction };
var DeleteCompleteAction = (function () {
    function DeleteCompleteAction(thing) {
        this.thing = thing;
        this.type = DELETE_COMPLETE;
    }
    return DeleteCompleteAction;
}());
export { DeleteCompleteAction };
var SelectAction = (function () {
    function SelectAction(thing) {
        this.thing = thing;
        this.type = SELECT;
    }
    return SelectAction;
}());
export { SelectAction };
var SelectCompleteAction = (function () {
    function SelectCompleteAction(thing) {
        this.thing = thing;
        this.type = SELECT_COMPLETE;
    }
    return SelectCompleteAction;
}());
export { SelectCompleteAction };
var SelectAllAction = (function () {
    function SelectAllAction() {
        this.type = SELECTALL;
    }
    return SelectAllAction;
}());
export { SelectAllAction };
var SelectAllCompleteAction = (function () {
    function SelectAllCompleteAction(things) {
        this.things = things;
        this.type = SELECTALL_COMPLETE;
    }
    return SelectAllCompleteAction;
}());
export { SelectAllCompleteAction };
//# sourceMappingURL=thing.action.js.map