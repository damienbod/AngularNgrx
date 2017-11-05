import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { HomeState } from '../store/home.state';
import * as HomeActions from '../store/thing.action';
import { Thing } from './../../models/thing';

@Component({
    selector: 'app-home-component',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

    public async: any;

    thing: Thing = new Thing();
    homeState$: Observable<HomeState>;

    constructor(private store: Store<any>) {
        this.homeState$ = this.store.select<HomeState>((state: any) => state.home.thingsItems);
    }

    ngOnInit() {
        this.store.dispatch(new HomeActions.SelectAllAction());
    }

    public addThing() {
        this.store.dispatch(new HomeActions.AddAction(this.thing));
    }

    public deleteThing(thing: Thing) {
        this.store.dispatch(new HomeActions.DeleteAction(thing));
    }
}
