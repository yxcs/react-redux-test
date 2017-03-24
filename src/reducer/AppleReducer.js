/**
 * Created by Administrator on 2017/3/23.
 */
import { fromJS } from 'immutable';

const initialState = {
    numb: 3
};

export default (state = initialState, action) => {

    switch (action.type) {

        case 'addNumbs':
            return fromJS(state).set('numb', state.numb + 1).toJS();

        case 'delNumbs':
            return fromJS(state).set('numb', state.numb - 1).toJS();

        default:
            return state;
    }

};