/**
 * Created by rastislavbertusek on 06.03.17.
 */

import { Injectable } from '@angular/core';
import { Actions, AppStore } from 'angular2-redux';
import { ReduxAction } from './state-reducer';
import { Receipt } from '../../../shared/model/receipt';

export const SET_RECEIPT = 'SET_RECEIPT';

@Injectable()
export class StateActions extends Actions {

    constructor(appStore: AppStore ) {
        super(appStore);
    }

    public setReceipt(receipt: Receipt): ReduxAction {
        return {
            type: SET_RECEIPT,
            receipt
        };
    };
}
