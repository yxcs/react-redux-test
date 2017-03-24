/**
 * Created by Administrator on 2017/3/21.
 */
// import $ from 'jquery';

import {addUser} from '../apis/require';

let actions = {
    addUser: () => {

        return (dispatch, getState) => {
            dispatch(actions.startUser());
            /*添加的数据时固定的*/
            addUser({
                "name": "godlike",
                "age": 25,
                "gender": "male"
            }).then(data => {
                dispatch(actions.successUser(data));
            }).catch(err => {
                dispatch(actions.errorUser(err));
            });

        }
    },
    startUser: () => ({
        type: "startCounter",
        status: 0
    }),
    successUser: data => ({
        type: "successCounter",
        status: 1
    }),
    errorUser: err => ({
        type: "errorCounter",
        status: -1
    })
};

 export default actions;