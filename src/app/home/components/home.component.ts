import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HomeState } from '../store/home.state';
import * as HomeActions from '../store/thing.action';
import { Thing } from './../../models/thing';

@Component({
    selector: 'app-home-component',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

    async: any;

    thing: Thing = new Thing();
    things$: Observable<Thing[]>;

    constructor(private store: Store<any>) {
        this.things$ = this.store.select<any>((state) => state.home)
        .pipe(map((homeState: HomeState) => homeState.things));
    }

    ngOnInit(): void {
        this.store.dispatch(HomeActions.selectAllThings());
    }

    addThing(): void {
        this.store.dispatch(HomeActions.addThing({payload: this.thing}));
    }

    deleteThing(thing: Thing): void {
        this.store.dispatch(HomeActions.deleteThing({payload: thing}));
    }
}
