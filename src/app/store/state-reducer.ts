/**
 * Created by rastislavbertusek on 06.03.17.
 */

import * as StateActions from './state-actions';
import { Receipt } from '../../../shared/model/receipt';

export interface ReduxState {
    receipt: Receipt;
}

export interface ReduxAction {
    type: string;
    receipt?: any;
}

const initState: ReduxState = {
    receipt: {
        items: [],
        totalSum: 0
    }
};

export let Reducer = (state: ReduxState = initState, action: ReduxAction = {type: null}) => {
    switch (action.type) {
        case StateActions.SET_RECEIPT:
            return Object.assign({}, state, { receipt: action.receipt });
        default:
            return state;
    }
};
