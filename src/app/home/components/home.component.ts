import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HomeState } from '../store/home.state';
import * as HomeActions from '../store/thing.action';
import * as fromSelectorsStore from '../store/home.selectors';
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
      // this.things$ = this.store.select<any>((state) => state.home)
      //  .pipe(map((homeState: HomeState) => homeState.things));

        this.things$ = this.store.pipe(select(fromSelectorsStore.selectThings))
    }

    ngOnInit(): void {
      this.store.dispatch(HomeActions.getAllThingsAction());
    }

    addThing(): void {
      const data = {payload: Object.assign(this.thing)};
      this.store.dispatch(HomeActions.addThingAction(data));
      this.thing = new Thing();
    }

    deleteThing(thing: Thing): void {
      this.store.dispatch(HomeActions.deleteThingAction({payload: thing}));
    }
}
