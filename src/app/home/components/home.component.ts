import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

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
    homeState$: Observable<HomeState>;

    constructor(private store: Store<any>) {
        this.homeState$ = this.store.select<HomeState>((state: any) => state.home);
    }

    ngOnInit(): void {
        this.store.dispatch(HomeActions.selectAllThings());
    }

    addThing(): void {
        this.store.dispatch(HomeActions.addThing({payload:this.thing}));
    }

    deleteThing(thing: Thing): void {
        this.store.dispatch(HomeActions.deleteThing({payload:thing}));
    }
}
