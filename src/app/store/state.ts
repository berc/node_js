/**
 * Created by rastislavbertusek on 06.03.17.
 */

// create factory to be called once angular has been bootstrapped
import { AppStore } from 'angular2-redux';
import { Reducer } from './state-reducer';

const store = new AppStore( Reducer );

export let appStore = {
    provide: AppStore,
    useValue: store
};
