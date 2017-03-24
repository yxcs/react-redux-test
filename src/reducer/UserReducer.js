/**
 * Created by Administrator on 2017/3/21.
 */
import { fromJS } from 'immutable';

const initialState = {
    count: 0,
    text: '无'
};

export default (state = initialState, action) => {

    switch (action.type) {

        case  'startUser':
            return fromJS(state).set('text', "开始").toJS();

        case  'successUser':
            return fromJS(state).set('text', "成功").toJS();

        case  'errorUser':
            return fromJS(state).set('text', "失败").toJS();

        default:
            return state;
    }

};