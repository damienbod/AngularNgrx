import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Thing } from './../../models/thing';
import { HomeState } from '../store/home.state';
import * as HomeActions from '../store/thing.action';

@Component({
    selector: 'app-home-component',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

    homeState$: Observable<HomeState>;
    thing: Thing
    things$: Observable<Thing[]>;

    constructor(private store: Store<HomeState>) {
        this.things$ = store.select(state => state.things);
    }

    ngOnInit() {
        this.store.dispatch(new HomeActions.SelectAllAction());
    }

    public addThing() {
        // TODO
    }

    public deleteThing(thing: Thing) {
        // TODO
    }
}
