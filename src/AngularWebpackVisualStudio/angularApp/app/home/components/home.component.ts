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

    constructor(private store: Store<any>) {
        this.homeState$ = this.store.select<HomeState>(state => state);
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
